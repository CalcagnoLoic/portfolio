import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (state: "success" | "error" | "missing") => {
  switch (state) {
    case "success":
      toast.success("Email envoyé avec succès!", {
        position: "bottom-right",
      });
      break;

    case "error":
      toast.error(
        "Oops, une erreur est survenue sur le serveur. Réessayez plus tard ou contactez moi par mail directement.",
        {
          position: "bottom-right",
        },
      );
      break;

    case "missing":
      toast.warn("Vous avez probablement oublié de remplir une information!", {
        position: "bottom-right",
      });
      break;

    default:
      break;
  }
};
