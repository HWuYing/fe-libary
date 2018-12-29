export const factory = fn =>  (req, res, next) => {
  next({
    $promise: fn(req, res),
  });
};
