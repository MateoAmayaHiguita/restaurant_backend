const Review = require('../models/reviews.models');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validIfReviewExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await review.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!review) {
    return next(new AppError(`Review with id: ${id} not found`));
  }

  req.review = review;
  next();
});
