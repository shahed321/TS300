enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  };
  
  // logs 404
  console.log(StatusCodes.NotFound);
  
  // logs 200
  console.log(StatusCodes.Success);