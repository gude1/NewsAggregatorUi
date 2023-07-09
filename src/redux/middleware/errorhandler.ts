import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { Console, deleteCookie } from "../../utils";
import Swal from "sweetalert2";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status == 401) {
        Console.error("middleware", action);
        Swal.fire({
          title: "Your session has expired you are required to login again ",
          icon: "info",
          confirmButtonColor: "#003399",
          allowOutsideClick: false,
        })
          .then((res) => {
            deleteCookie("id_1");
            window.location.replace("/auth");
          })
          .catch((e) => {
            deleteCookie("id_1");
            window.location.replace("/auth");
          });
      }
    }

    // Console.error("middleware", action);
    return next(action);
  };
