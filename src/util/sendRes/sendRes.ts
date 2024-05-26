import { Info } from "./sendRes.interface";

const sendRes = ({ res, data, error, messages, success, status }: Info) => {
  if (error) {
    return res.status(status).json({
      success: success ? success : false,
      messages,
      error: {
        messages: error.message,
        error,
      },
    });
  }

  return res.status(status).json({
    success: success ? success : true,
    messages,
    data,
  });
};

export { sendRes };
