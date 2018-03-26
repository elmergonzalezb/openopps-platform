module.exports = {
  subject: '<%- task.title %> is complete — thank you!',
  to: '<%- owner.username %>',
  data: function (model, done) {
    var data = {
      task: model.task,
      owner: model.owner,
      volunteers: model.volunteers,
      survey: openopps.survey,
    };
    done(null, data);
  },
  includes: [
    'task.update.completed.participant',
  ],
};
