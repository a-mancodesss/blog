"use client";
import { useTransition } from "react";
import toast, { Toaster } from "react-hot-toast";

// Calls a server action and shows a returned `{ error }` as a toast.
// Fields are kept on failure (a plain <form action> would reset them), and
// successful actions still redirect from the server as before.
const ActionForm = ({ action, children, ...props }) => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res = await action(formData);
      if (res?.error) {
        toast.error(res.error);
      }
    });
  };

  return (
    <form onSubmit={onSubmit} {...props}>
      <Toaster />
      <fieldset disabled={isPending} className="contents">
        {children}
      </fieldset>
    </form>
  );
};

export default ActionForm;
