import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
const CustomAlert = ({type}) => {
    const [AlertType, setalertType] = useState({type})

  return (
    <>
      {<Alert variant={AlertType} className="mt-2">
        {AlertType}
      </Alert>}
    </>
  );
};

export default CustomAlert