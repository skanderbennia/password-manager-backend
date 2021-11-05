const jwt = require("jsonwebtoken");

exports.protect = catchAsync(async (req, res, next) => {
  // getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(process.env.JWT_SECRET);
  console.log(req.headers.authorization);
  if (!token) {
    return next(
      new AppError("You are not logged in ! please login to get access"),
      401
    );
  }

  //verification the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check if the user still exists
  const currentUser = await User.findById(decoded.id);
  console.log(currentUser);
  if (!currentUser) {
    return next(
      new AppError("The token belonging to this token is no longer exist", 401)
    );
  }
  //check if user change password after the token was issued
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        "User recently changed the password . please log in again",
        401
      )
    );
  }
  //grant access to protected route
  req.user = currentUser;
  next();
});
