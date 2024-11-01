import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

const Serialize = ({ children }) => {
  return (
    children &&
    children.length > 0 &&
    children.map((node, i) => {
      if (Text.isText(node)) {
        let text = (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        );

        if (node.bold) {
          text = <strong key={i}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={i}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={i}>{text}</em>;
        }

        if (node.text === "") {
          text = <br />;
        }

        return <Fragment key={i}>{text}</Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case "h1":
          return <h1 key={i}>{Serialize({ children: node.children })}</h1>;
        case "h6":
          return <h6 key={i}>{Serialize({ children: node.children })}</h6>;
        case "blockquote":
          return (
            <blockquote key={i}>
              {Serialize({ children: node.children })}
            </blockquote>
          );
        case "ul":
          return <ul key={i}>{Serialize({ children: node.children })}</ul>;
        case "ol":
          return <ol key={i}>{Serialize({ children: node.children })}</ol>;
        case "li":
          return <li key={i}>{Serialize({ children: node.children })}</li>;
        case "link":
          return (
            <a href={escapeHTML(node.url)} key={i}>
              {Serialize({ children: node.children })}
            </a>
          );
        default:
          return <p key={i}>{Serialize({ children: node.children })}</p>;
      }
    })
  );
};

export default Serialize;
