const SuccessMsg = (props) => {
    const uploadStatus = props.uploadStatus;
    const successMessage = props.successMessage;
    const errorMessage = props.errorMessage;

    let isUploaded;

    if (uploadStatus == true) {
        isUploaded = <p className="msg-success">{successMessage}</p>;
      } else if (uploadStatus == false){
        isUploaded = <p className="msg-error">{errorMessage}</p>;
      }
      else {
        isUploaded = "";
      }
    return (
        <div>
            {isUploaded}
        </div>
    )
}

export default SuccessMsg;

