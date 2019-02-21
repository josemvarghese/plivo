module.exports = (app) => {
	app.use(require('../components/contact'));
	app.use(require('../components/auth'));
};
