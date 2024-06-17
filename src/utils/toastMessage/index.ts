import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (state: "success" | "error" | "missing") => {
  switch (state) {
    case "success":
      toast.success("Mail send with succes!", {
        position: "bottom-right",
      });
      break;

    case "error":
      toast.error(
        "Oops, there are an error with servor, try later or contact me by email.",
        {
          position: "bottom-right",
        },
      );
      break;

    case "missing":
      toast.warn("You have probably forgotten to fill in some information ", {
        position: "bottom-right",
      });
      break;

    default:
      break;
  }
};
