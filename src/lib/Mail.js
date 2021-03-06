import nodeemail from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;
    this.trasporter = nodeemail.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.trasporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}
export default new Mail();
