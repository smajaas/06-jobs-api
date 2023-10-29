const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};
const getJob = async (req, res) => {
  res.send('get single job');
};
const createJob = async (req, res) => {
  res.json(req.user);
};
const updateJob = async (req, res) => {
  res.send('update jobs');
};
const deleteJob = async (req, res) => {
  res.send('delete jobs');
};

module.exports = { getAllJobs, getJob, updateJob, createJob, deleteJob };
