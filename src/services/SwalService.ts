import Swal, { SweetAlertIcon } from "sweetalert2";

class SwalService {
  confirmDialog(callback: () => void, message: string) {
    if (!message) {
      message = "Are you sure?";
    }
    return Swal.fire({
      title: message,
      icon: "question",
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }

  confirmDelete(callback: () => void) {
    this.confirmDialog(callback, "Are you sure you want to delete this item?");
  }

  async confirmToHandle(
    title: string,
    icon: SweetAlertIcon,
    callback: () => void
  ) {
    const result = await Swal.fire({
      title: title,
      icon: icon,
      showDenyButton: true,
      confirmButtonColor: "#dc3545",
      confirmButtonText: "Yes",
      denyButtonColor: "gray",
      cancelButtonText: "No",
    });
    if (result.isConfirmed) {
      callback();
    }
    return false;
  }

  async showMessageToHandle(
    title: string,
    message: string,
    icon: SweetAlertIcon,
    callback: () => void
  ) {
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: icon,
    });
    if (result.isConfirmed || result.isDismissed) {
      callback();
      return true;
    }
    return false;
  }

  showMessage(title: string, message: string, icon: SweetAlertIcon) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
    });
  }
}

const swalService = new SwalService();
export default swalService;
