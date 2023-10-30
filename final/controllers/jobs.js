const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};
const getJob = async (req, res) => {
  res.send('get single job');
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
  res.send('update jobs');
};
const deleteJob = async (req, res) => {
  res.send('delete jobs');
};

module.exports = { getAllJobs, getJob, updateJob, createJob, deleteJob };
