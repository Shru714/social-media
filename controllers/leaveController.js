exports.submitLeave = (req, res) => {
  // Mock response for leave application
  res.status(201).json({
    message: 'Leave application submitted successfully',
    data: req.body
  });
};
