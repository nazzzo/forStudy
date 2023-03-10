class UserRepository {
  constructor({ User }) {
    this.User = User;
  }

  async addUser(payload) {
    console.log(payload);
    try {
      const user = await this.User.create(payload, { raw: true });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
  async findUser(user) {
    const key = Object.keys(user);
    // console.log(user[key]);
    try {
      const userCheck = await this.User.findOne({
        raw: true,
        where: {
          [key]: user[key]
        },
      });
      return userCheck;
    } catch (e) {
      throw new Error(e);
    }
  }
  async getUserById(userid) {
    console.log(`repo:`, userid);
    try {
      const user = await this.User.findOne({
        raw: true,
        where: {
          userid,
        },
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updateProfile(userData) {
    console.log(`repo : `, userData);
    const user = await this.User.update(
      {
        image: userData.image,
        username: userData.username,
        userpw: userData.userpw,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
      },
      {
        where: { userid: userData.userid },
        returning: true
      }
    );
    console.log(`repo2 : `, user[1])
    return user[1];
  }
}

module.exports = UserRepository;
