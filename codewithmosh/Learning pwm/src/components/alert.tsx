import { ReactNode } from "react";

interface Props {
  children: ReactNode,
  onClick: ()=>void
}

function Alert({ children, onClick }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );

  // return <div className="alert alert-danger" >{children}</div>
}

export default Alert;
