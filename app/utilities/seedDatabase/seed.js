import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const User = db.user;
const Role = db.role;
const SqlTestUser = db.sqlTestUser;
const SqlTestGoogleUser = db.sqlTestGoogleUser;

const dropTables = async () => {
  await db.sequelize.sync({ force: true });
};

const insertStuff = async () => {
  const role1 = await Role.create({
    id: 1,
    name: 'user',
    permissions: [1],
  });
  const role2 = await Role.create({
    id: 2,
    name: 'moderator',
    permissions: [1, 2],
  });
  const role3 = await Role.create({
    id: 3,
    name: 'admin',
    permissions: [1, 2, 3],
  });
  const user1 = await User.create({
    id: 'a46e84b7-86bf-41e8-a580-afb242011508',
    username: 'user1',
    email: 'user1@hello.com',
    password: bcrypt.hashSync('hello123', 10),
    roleId: role1.id,
  });
  const user2 = await User.create({
    id: 'f9c0ea12-cf86-463c-8dd6-d65d1b7e285c',
    username: 'user2',
    email: 'user2@hello.com',
    password: bcrypt.hashSync('hello123', 10),
    roleId: role1.id,
  });
  const mod1 = await User.create({
    id: 'c61ab811-aff4-4dde-918b-9c8359495b93',
    username: 'moderator1',
    email: 'moderator1@hello.com',
    password: bcrypt.hashSync('hello123', 10),
    roleId: role2.id,
  });
  const admin1 = await User.create({
    id: '3dbc9212-411e-4b37-a81c-80db1cba055f',
    username: 'admin1',
    email: 'admin1@hello.com',
    password: bcrypt.hashSync('hello123', 10),
    roleId: role3.id,
  });
  SqlTestUser.create({
    user_id: 48063,
    is_activated: true,
    signed_up_on: new Date(1560469020),
    last_login: new Date(1560469140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50616,
    is_activated: true,
    signed_up_on: new Date(1562321640),
    last_login: new Date(1562321640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46065,
    is_activated: true,
    signed_up_on: new Date(1559633160),
    last_login: new Date(1559633160),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52503,
    is_activated: true,
    signed_up_on: new Date(1562459340),
    last_login: new Date(1562467980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55278,
    is_activated: true,
    signed_up_on: new Date(1562484120),
    last_login: new Date(1562484420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50394,
    is_activated: true,
    signed_up_on: new Date(1562141400),
    last_login: new Date(1562141460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53169,
    is_activated: true,
    signed_up_on: new Date(1562462280),
    last_login: new Date(1562462340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77145,
    is_activated: true,
    signed_up_on: new Date(1564119780),
    last_login: new Date(1564119780),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73482,
    is_activated: true,
    signed_up_on: new Date(1563618240),
    last_login: new Date(1563618240),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46176,
    is_activated: true,
    signed_up_on: new Date(1559643180),
    last_login: new Date(1559643180),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57498,
    is_activated: true,
    signed_up_on: new Date(1562549520),
    last_login: new Date(1562551920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48174,
    is_activated: true,
    signed_up_on: new Date(1560554160),
    last_login: new Date(1562640960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 55389,
    is_activated: true,
    signed_up_on: new Date(1562498100),
    last_login: new Date(1562511600),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57720,
    is_activated: true,
    signed_up_on: new Date(1562556120),
    last_login: new Date(1562559360),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53280,
    is_activated: true,
    signed_up_on: new Date(1562462700),
    last_login: new Date(1562462700),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46287,
    is_activated: true,
    signed_up_on: new Date(1559687220),
    last_login: new Date(1564529460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 89355,
    is_activated: true,
    signed_up_on: new Date(1564278360),
    last_login: new Date(1564354680),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77256,
    is_activated: true,
    signed_up_on: new Date(1564119900),
    last_login: new Date(1564119900),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48285,
    is_activated: true,
    signed_up_on: new Date(1560645600),
    last_login: new Date(1560645720),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48396,
    is_activated: true,
    signed_up_on: new Date(1560654360),
    last_login: new Date(1560654480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60162,
    is_activated: true,
    signed_up_on: new Date(1562607660),
    last_login: new Date(1562607720),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46509,
    is_activated: true,
    signed_up_on: new Date(1559706660),
    last_login: new Date(1563768000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 82695,
    is_activated: true,
    signed_up_on: new Date(1564190880),
    last_login: new Date(1564190880),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48507,
    is_activated: true,
    signed_up_on: new Date(1560659160),
    last_login: new Date(1560659160),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46620,
    is_activated: true,
    signed_up_on: new Date(1559722980),
    last_login: new Date(1559724480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48618,
    is_activated: true,
    signed_up_on: new Date(1560668700),
    last_login: new Date(1560668700),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52614,
    is_activated: true,
    signed_up_on: new Date(1562459700),
    last_login: new Date(1562459760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46731,
    is_activated: true,
    signed_up_on: new Date(1559825580),
    last_login: new Date(1559825820),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46842,
    is_activated: true,
    signed_up_on: new Date(1559825640),
    last_login: new Date(1559825640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60384,
    is_activated: true,
    signed_up_on: new Date(1562610180),
    last_login: new Date(1562610180),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99123,
    is_activated: true,
    signed_up_on: new Date(1564452840),
    last_login: new Date(1564452840),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48840,
    is_activated: false,
    signed_up_on: new Date(1560704940),
    last_login: new Date(-2209161600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 46953,
    is_activated: true,
    signed_up_on: new Date(1559972640),
    last_login: new Date(1559972700),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65601,
    is_activated: true,
    signed_up_on: new Date(1562713740),
    last_login: new Date(1562713740),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 44844,
    is_activated: true,
    signed_up_on: new Date(1559361480),
    last_login: new Date(1559361540),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83916,
    is_activated: true,
    signed_up_on: new Date(1564201560),
    last_login: new Date(1564201560),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50727,
    is_activated: true,
    signed_up_on: new Date(1562328000),
    last_login: new Date(1562328600),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47064,
    is_activated: true,
    signed_up_on: new Date(1559974140),
    last_login: new Date(1559974200),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 48951,
    is_activated: true,
    signed_up_on: new Date(1560713340),
    last_login: new Date(1560716160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 44955,
    is_activated: true,
    signed_up_on: new Date(1559373120),
    last_login: new Date(1559422440),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84027,
    is_activated: true,
    signed_up_on: new Date(1564201620),
    last_login: new Date(1564201800),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53502,
    is_activated: true,
    signed_up_on: new Date(1562465100),
    last_login: new Date(1562465160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59718,
    is_activated: true,
    signed_up_on: new Date(1562594820),
    last_login: new Date(1562788980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62382,
    is_activated: true,
    signed_up_on: new Date(1562631900),
    last_login: new Date(1562631960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60495,
    is_activated: true,
    signed_up_on: new Date(1562610480),
    last_login: new Date(1562613960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52725,
    is_activated: true,
    signed_up_on: new Date(1562460120),
    last_login: new Date(1562460900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 55722,
    is_activated: true,
    signed_up_on: new Date(1562511300),
    last_login: new Date(1562511360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57831,
    is_activated: true,
    signed_up_on: new Date(1562558520),
    last_login: new Date(1562559600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71928,
    is_activated: true,
    signed_up_on: new Date(1563215820),
    last_login: new Date(1563215820),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47175,
    is_activated: true,
    signed_up_on: new Date(1560064140),
    last_login: new Date(1560064140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49062,
    is_activated: true,
    signed_up_on: new Date(1560725160),
    last_login: new Date(1560725160),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45066,
    is_activated: true,
    signed_up_on: new Date(1559375340),
    last_login: new Date(1559375460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50838,
    is_activated: true,
    signed_up_on: new Date(1562365680),
    last_login: new Date(1562365680),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68709,
    is_activated: true,
    signed_up_on: new Date(1562889960),
    last_login: new Date(1562890140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62493,
    is_activated: true,
    signed_up_on: new Date(1562632800),
    last_login: new Date(1562632980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65712,
    is_activated: false,
    signed_up_on: new Date(1562714940),
    last_login: new Date(1562714940),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64158,
    is_activated: true,
    signed_up_on: new Date(1562656140),
    last_login: new Date(1562656140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67377,
    is_activated: true,
    signed_up_on: new Date(1562792160),
    last_login: new Date(1562792280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70374,
    is_activated: true,
    signed_up_on: new Date(1563044760),
    last_login: new Date(1563044880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53613,
    is_activated: false,
    signed_up_on: new Date(1562465220),
    last_login: new Date(1562465220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76812,
    is_activated: true,
    signed_up_on: new Date(1564117440),
    last_login: new Date(1564326240),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59496,
    is_activated: true,
    signed_up_on: new Date(1562589600),
    last_login: new Date(1562589600),
    sign_up_source: 'linkedin',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55611,
    is_activated: true,
    signed_up_on: new Date(1562509860),
    last_login: new Date(1562512620),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52836,
    is_activated: true,
    signed_up_on: new Date(1562460780),
    last_login: new Date(1562460840),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57942,
    is_activated: true,
    signed_up_on: new Date(1562561460),
    last_login: new Date(1562561460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75369,
    is_activated: true,
    signed_up_on: new Date(1563792900),
    last_login: new Date(1563792960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73593,
    is_activated: true,
    signed_up_on: new Date(1563629880),
    last_login: new Date(1563629940),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60606,
    is_activated: true,
    signed_up_on: new Date(1562612340),
    last_login: new Date(1562612400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77589,
    is_activated: true,
    signed_up_on: new Date(1564122240),
    last_login: new Date(1564182300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89133,
    is_activated: true,
    signed_up_on: new Date(1564277400),
    last_login: new Date(1564277400),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55833,
    is_activated: true,
    signed_up_on: new Date(1562514120),
    last_login: new Date(1562514180),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57609,
    is_activated: true,
    signed_up_on: new Date(1562554320),
    last_login: new Date(1562554320),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47286,
    is_activated: true,
    signed_up_on: new Date(1560129900),
    last_login: new Date(1560129960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 58053,
    is_activated: true,
    signed_up_on: new Date(1562561640),
    last_login: new Date(1562561640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45177,
    is_activated: true,
    signed_up_on: new Date(1559382660),
    last_login: new Date(1559382720),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64047,
    is_activated: true,
    signed_up_on: new Date(1562653800),
    last_login: new Date(1562656500),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52947,
    is_activated: false,
    signed_up_on: new Date(1562461080),
    last_login: new Date(1562461080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 53724,
    is_activated: true,
    signed_up_on: new Date(1562465340),
    last_login: new Date(1562465340),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60717,
    is_activated: true,
    signed_up_on: new Date(1562612460),
    last_login: new Date(1562612460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75258,
    is_activated: true,
    signed_up_on: new Date(1563790440),
    last_login: new Date(1563790440),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50949,
    is_activated: true,
    signed_up_on: new Date(1562370960),
    last_login: new Date(1562370960),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67488,
    is_activated: true,
    signed_up_on: new Date(1562798220),
    last_login: new Date(1562798340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59829,
    is_activated: true,
    signed_up_on: new Date(1562598960),
    last_login: new Date(1562599020),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89688,
    is_activated: true,
    signed_up_on: new Date(1564281840),
    last_login: new Date(1564281900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90687,
    is_activated: true,
    signed_up_on: new Date(1564310640),
    last_login: new Date(1564310760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68820,
    is_activated: true,
    signed_up_on: new Date(1562890320),
    last_login: new Date(1562890380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70485,
    is_activated: false,
    signed_up_on: new Date(1563066900),
    last_login: new Date(1563066900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 72039,
    is_activated: true,
    signed_up_on: new Date(1563261000),
    last_login: new Date(1563276240),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73704,
    is_activated: true,
    signed_up_on: new Date(1563670200),
    last_login: new Date(1563670260),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72150,
    is_activated: false,
    signed_up_on: new Date(1563332340),
    last_login: new Date(-2209161600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 55944,
    is_activated: true,
    signed_up_on: new Date(1562515920),
    last_login: new Date(1562515920),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59940,
    is_activated: true,
    signed_up_on: new Date(1562599080),
    last_login: new Date(1562599080),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64269,
    is_activated: true,
    signed_up_on: new Date(1562664480),
    last_login: new Date(1562664480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49173,
    is_activated: true,
    signed_up_on: new Date(1561003680),
    last_login: new Date(1561003740),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65823,
    is_activated: false,
    signed_up_on: new Date(1562721480),
    last_login: new Date(1562721480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 47397,
    is_activated: true,
    signed_up_on: new Date(1560130860),
    last_login: new Date(1560130860),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60828,
    is_activated: true,
    signed_up_on: new Date(1562613240),
    last_login: new Date(1562620980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53058,
    is_activated: true,
    signed_up_on: new Date(1562461740),
    last_login: new Date(1562461800),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53391,
    is_activated: true,
    signed_up_on: new Date(1562464980),
    last_login: new Date(1562516760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58164,
    is_activated: true,
    signed_up_on: new Date(1562562240),
    last_login: new Date(1562562240),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51060,
    is_activated: true,
    signed_up_on: new Date(1562371140),
    last_login: new Date(1562371140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67599,
    is_activated: true,
    signed_up_on: new Date(1562799180),
    last_login: new Date(1562799180),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62604,
    is_activated: true,
    signed_up_on: new Date(1562634480),
    last_login: new Date(1562634480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84360,
    is_activated: true,
    signed_up_on: new Date(1564211040),
    last_login: new Date(1564211280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68931,
    is_activated: true,
    signed_up_on: new Date(1562913180),
    last_login: new Date(1562913180),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75480,
    is_activated: true,
    signed_up_on: new Date(1563802140),
    last_login: new Date(1563802260),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73815,
    is_activated: true,
    signed_up_on: new Date(1563679800),
    last_login: new Date(1563679860),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47508,
    is_activated: true,
    signed_up_on: new Date(1560150960),
    last_login: new Date(1560150960),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49284,
    is_activated: true,
    signed_up_on: new Date(1561180020),
    last_login: new Date(1561199700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 60939,
    is_activated: true,
    signed_up_on: new Date(1562614860),
    last_login: new Date(1562614860),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51171,
    is_activated: true,
    signed_up_on: new Date(1562375340),
    last_login: new Date(1562375460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62715,
    is_activated: true,
    signed_up_on: new Date(1562637780),
    last_login: new Date(1562637780),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69042,
    is_activated: true,
    signed_up_on: new Date(1562959860),
    last_login: new Date(1562962920),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58275,
    is_activated: true,
    signed_up_on: new Date(1562562600),
    last_login: new Date(1562562600),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53835,
    is_activated: true,
    signed_up_on: new Date(1562465760),
    last_login: new Date(1562465760),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56055,
    is_activated: true,
    signed_up_on: new Date(1562516940),
    last_login: new Date(1562517300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79032,
    is_activated: true,
    signed_up_on: new Date(1564157400),
    last_login: new Date(1564157400),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72261,
    is_activated: true,
    signed_up_on: new Date(1563332400),
    last_login: new Date(1563332520),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 67710,
    is_activated: true,
    signed_up_on: new Date(1562803020),
    last_login: new Date(1562803080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65934,
    is_activated: true,
    signed_up_on: new Date(1562722860),
    last_login: new Date(1562722920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75591,
    is_activated: true,
    signed_up_on: new Date(1563808020),
    last_login: new Date(1563808020),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91575,
    is_activated: true,
    signed_up_on: new Date(1564332300),
    last_login: new Date(1564332300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73926,
    is_activated: true,
    signed_up_on: new Date(1563684000),
    last_login: new Date(1563684000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77034,
    is_activated: true,
    signed_up_on: new Date(1564119360),
    last_login: new Date(1564119420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97347,
    is_activated: true,
    signed_up_on: new Date(1564430400),
    last_login: new Date(1564430400),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47619,
    is_activated: true,
    signed_up_on: new Date(1560154920),
    last_login: new Date(1560154980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45510,
    is_activated: true,
    signed_up_on: new Date(1559464200),
    last_login: new Date(1559464200),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61050,
    is_activated: true,
    signed_up_on: new Date(1562615280),
    last_login: new Date(1562615340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78588,
    is_activated: true,
    signed_up_on: new Date(1564152540),
    last_login: new Date(1564152540),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56166,
    is_activated: true,
    signed_up_on: new Date(1562523060),
    last_login: new Date(1562523060),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60051,
    is_activated: true,
    signed_up_on: new Date(1562600460),
    last_login: new Date(1562694360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69153,
    is_activated: true,
    signed_up_on: new Date(1562959920),
    last_login: new Date(1562959980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 100233,
    is_activated: true,
    signed_up_on: new Date(1564596840),
    last_login: new Date(1564596840),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66045,
    is_activated: true,
    signed_up_on: new Date(1562729940),
    last_login: new Date(1564604340),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49395,
    is_activated: true,
    signed_up_on: new Date(1561204920),
    last_login: new Date(1561378560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 58386,
    is_activated: true,
    signed_up_on: new Date(1562563980),
    last_login: new Date(1562564040),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 53946,
    is_activated: true,
    signed_up_on: new Date(1562466060),
    last_login: new Date(1562466060),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89466,
    is_activated: true,
    signed_up_on: new Date(1564281120),
    last_login: new Date(1564281120),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62826,
    is_activated: true,
    signed_up_on: new Date(1562638020),
    last_login: new Date(1562638020),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51282,
    is_activated: true,
    signed_up_on: new Date(1562380980),
    last_login: new Date(1562380980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70818,
    is_activated: true,
    signed_up_on: new Date(1563096300),
    last_login: new Date(1563096360),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67821,
    is_activated: true,
    signed_up_on: new Date(1562803320),
    last_login: new Date(1562803440),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74037,
    is_activated: true,
    signed_up_on: new Date(1563706380),
    last_login: new Date(1563706380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75702,
    is_activated: true,
    signed_up_on: new Date(1563819000),
    last_login: new Date(1563819000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75813,
    is_activated: true,
    signed_up_on: new Date(1563823380),
    last_login: new Date(1563824340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47730,
    is_activated: true,
    signed_up_on: new Date(1560165660),
    last_login: new Date(1560170340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51393,
    is_activated: true,
    signed_up_on: new Date(1562387940),
    last_login: new Date(1562388000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59607,
    is_activated: true,
    signed_up_on: new Date(1562589840),
    last_login: new Date(1562589900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58497,
    is_activated: true,
    signed_up_on: new Date(1562565180),
    last_login: new Date(1562565360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49506,
    is_activated: true,
    signed_up_on: new Date(1561374300),
    last_login: new Date(1561374420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54057,
    is_activated: true,
    signed_up_on: new Date(1562467560),
    last_login: new Date(1562467560),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67266,
    is_activated: false,
    signed_up_on: new Date(1562788740),
    last_login: new Date(1562788980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70929,
    is_activated: true,
    signed_up_on: new Date(1563119100),
    last_login: new Date(1563119100),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64491,
    is_activated: true,
    signed_up_on: new Date(1562690580),
    last_login: new Date(1562693700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66156,
    is_activated: true,
    signed_up_on: new Date(1562733180),
    last_login: new Date(1562733480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67932,
    is_activated: true,
    signed_up_on: new Date(1562805540),
    last_login: new Date(1562805540),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62937,
    is_activated: true,
    signed_up_on: new Date(1562639100),
    last_login: new Date(1562639100),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72483,
    is_activated: true,
    signed_up_on: new Date(1563348540),
    last_login: new Date(1563348540),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74148,
    is_activated: true,
    signed_up_on: new Date(1563712020),
    last_login: new Date(1563712080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56277,
    is_activated: true,
    signed_up_on: new Date(1562524260),
    last_login: new Date(1562524260),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77367,
    is_activated: true,
    signed_up_on: new Date(1564120560),
    last_login: new Date(1564163880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77700,
    is_activated: true,
    signed_up_on: new Date(1564125300),
    last_login: new Date(1564172760),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80919,
    is_activated: true,
    signed_up_on: new Date(1564170960),
    last_login: new Date(1564171620),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45732,
    is_activated: true,
    signed_up_on: new Date(1559550540),
    last_login: new Date(1559550540),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58608,
    is_activated: true,
    signed_up_on: new Date(1562566140),
    last_login: new Date(1562566140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61272,
    is_activated: true,
    signed_up_on: new Date(1562616240),
    last_login: new Date(1562618280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47841,
    is_activated: true,
    signed_up_on: new Date(1560221100),
    last_login: new Date(1560221100),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51504,
    is_activated: true,
    signed_up_on: new Date(1562410140),
    last_login: new Date(1562410140),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66267,
    is_activated: true,
    signed_up_on: new Date(1562737440),
    last_login: new Date(1562802420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49617,
    is_activated: true,
    signed_up_on: new Date(1561463100),
    last_login: new Date(1561463160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 64602,
    is_activated: true,
    signed_up_on: new Date(1562691540),
    last_login: new Date(1562691660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56388,
    is_activated: true,
    signed_up_on: new Date(1562526300),
    last_login: new Date(1562526300),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72594,
    is_activated: true,
    signed_up_on: new Date(1563352320),
    last_login: new Date(1563352320),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63048,
    is_activated: true,
    signed_up_on: new Date(1562639340),
    last_login: new Date(1562639340),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67155,
    is_activated: true,
    signed_up_on: new Date(1562787900),
    last_login: new Date(1562787900),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54168,
    is_activated: true,
    signed_up_on: new Date(1562468340),
    last_login: new Date(1562468880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71040,
    is_activated: true,
    signed_up_on: new Date(1563121320),
    last_login: new Date(1563121380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79143,
    is_activated: true,
    signed_up_on: new Date(1564160400),
    last_login: new Date(1564160460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79254,
    is_activated: true,
    signed_up_on: new Date(1564160460),
    last_login: new Date(1564160460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69264,
    is_activated: false,
    signed_up_on: new Date(1562967840),
    last_login: new Date(1562967840),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86469,
    is_activated: true,
    signed_up_on: new Date(1564246860),
    last_login: new Date(1564247100),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74259,
    is_activated: true,
    signed_up_on: new Date(1563723060),
    last_login: new Date(1563723180),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75924,
    is_activated: false,
    signed_up_on: new Date(1563836700),
    last_login: new Date(1563836700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 47952,
    is_activated: true,
    signed_up_on: new Date(1560307980),
    last_login: new Date(1560308040),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49728,
    is_activated: true,
    signed_up_on: new Date(1561480140),
    last_login: new Date(1561480140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61383,
    is_activated: true,
    signed_up_on: new Date(1562616420),
    last_login: new Date(1562616420),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45843,
    is_activated: true,
    signed_up_on: new Date(1559624760),
    last_login: new Date(1559624820),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54279,
    is_activated: true,
    signed_up_on: new Date(1562468460),
    last_login: new Date(1562468460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63159,
    is_activated: true,
    signed_up_on: new Date(1562639640),
    last_login: new Date(1562639640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66378,
    is_activated: true,
    signed_up_on: new Date(1562772240),
    last_login: new Date(1562772480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51615,
    is_activated: true,
    signed_up_on: new Date(1562416500),
    last_login: new Date(1562416560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69375,
    is_activated: true,
    signed_up_on: new Date(1562978880),
    last_login: new Date(1562978880),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81030,
    is_activated: true,
    signed_up_on: new Date(1564171860),
    last_login: new Date(1564171860),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64713,
    is_activated: true,
    signed_up_on: new Date(1562693160),
    last_login: new Date(1562693220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71151,
    is_activated: true,
    signed_up_on: new Date(1563121980),
    last_login: new Date(1563121980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58719,
    is_activated: true,
    signed_up_on: new Date(1562567100),
    last_login: new Date(1562567160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72705,
    is_activated: true,
    signed_up_on: new Date(1563358800),
    last_login: new Date(1563358800),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56499,
    is_activated: true,
    signed_up_on: new Date(1562527620),
    last_login: new Date(1562527620),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77811,
    is_activated: true,
    signed_up_on: new Date(1564126500),
    last_login: new Date(1564126560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76035,
    is_activated: true,
    signed_up_on: new Date(1563852240),
    last_login: new Date(1563852240),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74370,
    is_activated: false,
    signed_up_on: new Date(1563723600),
    last_login: new Date(1563723600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78921,
    is_activated: true,
    signed_up_on: new Date(1564156500),
    last_login: new Date(1564156560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80142,
    is_activated: true,
    signed_up_on: new Date(1564164900),
    last_login: new Date(1564164960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74481,
    is_activated: true,
    signed_up_on: new Date(1563745020),
    last_login: new Date(1563745020),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56610,
    is_activated: true,
    signed_up_on: new Date(1562530740),
    last_login: new Date(1562530800),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49839,
    is_activated: false,
    signed_up_on: new Date(1561614480),
    last_login: new Date(1561614480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45954,
    is_activated: false,
    signed_up_on: new Date(1559628960),
    last_login: new Date(1559628960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64824,
    is_activated: true,
    signed_up_on: new Date(1562694540),
    last_login: new Date(1562694540),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54390,
    is_activated: true,
    signed_up_on: new Date(1562469480),
    last_login: new Date(1562469540),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66489,
    is_activated: true,
    signed_up_on: new Date(1562775540),
    last_login: new Date(1562775600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51726,
    is_activated: true,
    signed_up_on: new Date(1562419500),
    last_login: new Date(1562419560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68043,
    is_activated: true,
    signed_up_on: new Date(1562840520),
    last_login: new Date(1562840520),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76146,
    is_activated: true,
    signed_up_on: new Date(1563857100),
    last_login: new Date(1563857100),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77922,
    is_activated: true,
    signed_up_on: new Date(1564131240),
    last_login: new Date(1564131300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84471,
    is_activated: true,
    signed_up_on: new Date(1564214700),
    last_login: new Date(1564214700),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63270,
    is_activated: true,
    signed_up_on: new Date(1562641500),
    last_login: new Date(1562641620),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72816,
    is_activated: true,
    signed_up_on: new Date(1563360360),
    last_login: new Date(1563360420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71262,
    is_activated: true,
    signed_up_on: new Date(1563126960),
    last_login: new Date(1563127080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79365,
    is_activated: true,
    signed_up_on: new Date(1564161240),
    last_login: new Date(1564161420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61494,
    is_activated: true,
    signed_up_on: new Date(1562617680),
    last_login: new Date(1562617680),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54501,
    is_activated: true,
    signed_up_on: new Date(1562470440),
    last_login: new Date(1562471640),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61605,
    is_activated: true,
    signed_up_on: new Date(1562617860),
    last_login: new Date(1562617860),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71373,
    is_activated: true,
    signed_up_on: new Date(1563129480),
    last_login: new Date(1563129480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 49950,
    is_activated: true,
    signed_up_on: new Date(1561765260),
    last_login: new Date(1561765380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 58830,
    is_activated: true,
    signed_up_on: new Date(1562568480),
    last_login: new Date(1562744520),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69597,
    is_activated: true,
    signed_up_on: new Date(1562990160),
    last_login: new Date(1562990160),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66600,
    is_activated: true,
    signed_up_on: new Date(1562777460),
    last_login: new Date(1562777520),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63381,
    is_activated: true,
    signed_up_on: new Date(1562642280),
    last_login: new Date(1562642280),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64935,
    is_activated: true,
    signed_up_on: new Date(1562699040),
    last_login: new Date(1562699100),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81696,
    is_activated: true,
    signed_up_on: new Date(1564176660),
    last_login: new Date(1564177380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72927,
    is_activated: true,
    signed_up_on: new Date(1563362460),
    last_login: new Date(1563362460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78033,
    is_activated: true,
    signed_up_on: new Date(1564134120),
    last_login: new Date(1564134120),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51837,
    is_activated: true,
    signed_up_on: new Date(1562429700),
    last_login: new Date(1562429760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74592,
    is_activated: true,
    signed_up_on: new Date(1563749160),
    last_login: new Date(1563749220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80253,
    is_activated: true,
    signed_up_on: new Date(1564165320),
    last_login: new Date(1564165380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76257,
    is_activated: true,
    signed_up_on: new Date(1563871020),
    last_login: new Date(1563871020),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82140,
    is_activated: true,
    signed_up_on: new Date(1564181640),
    last_login: new Date(1564181760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56721,
    is_activated: true,
    signed_up_on: new Date(1562531460),
    last_login: new Date(1564158960),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79476,
    is_activated: true,
    signed_up_on: new Date(1564161300),
    last_login: new Date(1564161360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 58941,
    is_activated: true,
    signed_up_on: new Date(1562570220),
    last_login: new Date(1562570220),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50061,
    is_activated: true,
    signed_up_on: new Date(1561815480),
    last_login: new Date(1561815600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 61716,
    is_activated: true,
    signed_up_on: new Date(1562623740),
    last_login: new Date(1562623740),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78144,
    is_activated: true,
    signed_up_on: new Date(1564135140),
    last_login: new Date(1564135140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66711,
    is_activated: true,
    signed_up_on: new Date(1562780460),
    last_login: new Date(1562780520),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69708,
    is_activated: true,
    signed_up_on: new Date(1562995320),
    last_login: new Date(1562995320),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 77478,
    is_activated: true,
    signed_up_on: new Date(1564121520),
    last_login: new Date(1564121520),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76368,
    is_activated: true,
    signed_up_on: new Date(1563901020),
    last_login: new Date(1563901080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65046,
    is_activated: true,
    signed_up_on: new Date(1562699280),
    last_login: new Date(1562785740),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54612,
    is_activated: true,
    signed_up_on: new Date(1562471460),
    last_login: new Date(1562602380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56832,
    is_activated: false,
    signed_up_on: new Date(1562532900),
    last_login: new Date(1562532900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68154,
    is_activated: true,
    signed_up_on: new Date(1562855520),
    last_login: new Date(1562855580),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71484,
    is_activated: true,
    signed_up_on: new Date(1563142440),
    last_login: new Date(1563142500),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63492,
    is_activated: true,
    signed_up_on: new Date(1562643420),
    last_login: new Date(1562643480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80364,
    is_activated: true,
    signed_up_on: new Date(1564165560),
    last_login: new Date(1564165620),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80031,
    is_activated: true,
    signed_up_on: new Date(1564163100),
    last_login: new Date(1564163160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82251,
    is_activated: false,
    signed_up_on: new Date(1564182960),
    last_login: new Date(1564190280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81252,
    is_activated: true,
    signed_up_on: new Date(1564173540),
    last_login: new Date(1564174440),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74703,
    is_activated: true,
    signed_up_on: new Date(1563773640),
    last_login: new Date(1563773700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81807,
    is_activated: true,
    signed_up_on: new Date(1564178820),
    last_login: new Date(1564200660),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79587,
    is_activated: true,
    signed_up_on: new Date(1564162020),
    last_login: new Date(1564363620),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61827,
    is_activated: true,
    signed_up_on: new Date(1562626020),
    last_login: new Date(1562626080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63603,
    is_activated: true,
    signed_up_on: new Date(1562644920),
    last_login: new Date(1562644980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65157,
    is_activated: true,
    signed_up_on: new Date(1562702220),
    last_login: new Date(1562702220),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50172,
    is_activated: true,
    signed_up_on: new Date(1561820640),
    last_login: new Date(1561820640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 56943,
    is_activated: true,
    signed_up_on: new Date(1562533080),
    last_login: new Date(1562546700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89910,
    is_activated: true,
    signed_up_on: new Date(1564284720),
    last_login: new Date(1564284780),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59052,
    is_activated: false,
    signed_up_on: new Date(1562571960),
    last_login: new Date(1562571960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66822,
    is_activated: true,
    signed_up_on: new Date(1562781300),
    last_login: new Date(1562781360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54723,
    is_activated: true,
    signed_up_on: new Date(1562472900),
    last_login: new Date(1562472900),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73038,
    is_activated: true,
    signed_up_on: new Date(1563416640),
    last_login: new Date(1563416760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 51948,
    is_activated: true,
    signed_up_on: new Date(1562438400),
    last_login: new Date(1562438460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78255,
    is_activated: true,
    signed_up_on: new Date(1564143540),
    last_login: new Date(1564143600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81363,
    is_activated: true,
    signed_up_on: new Date(1564173840),
    last_login: new Date(1564173840),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87468,
    is_activated: true,
    signed_up_on: new Date(1564255800),
    last_login: new Date(1564255920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69819,
    is_activated: true,
    signed_up_on: new Date(1562995740),
    last_login: new Date(1562995920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79698,
    is_activated: true,
    signed_up_on: new Date(1564162080),
    last_login: new Date(1564162140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74814,
    is_activated: true,
    signed_up_on: new Date(1563776520),
    last_login: new Date(1563776700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80475,
    is_activated: true,
    signed_up_on: new Date(1564168740),
    last_login: new Date(1564169760),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81918,
    is_activated: true,
    signed_up_on: new Date(1564179480),
    last_login: new Date(1564179480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50283,
    is_activated: true,
    signed_up_on: new Date(1562082300),
    last_login: new Date(1562082300),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59163,
    is_activated: true,
    signed_up_on: new Date(1562572320),
    last_login: new Date(1562572320),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52059,
    is_activated: true,
    signed_up_on: new Date(1562450880),
    last_login: new Date(1562450940),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78366,
    is_activated: true,
    signed_up_on: new Date(1564148340),
    last_login: new Date(1564148400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61938,
    is_activated: true,
    signed_up_on: new Date(1562626260),
    last_login: new Date(1562626320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65268,
    is_activated: true,
    signed_up_on: new Date(1562705040),
    last_login: new Date(1562705040),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 66933,
    is_activated: true,
    signed_up_on: new Date(1562781540),
    last_login: new Date(1562781540),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 60273,
    is_activated: true,
    signed_up_on: new Date(1562608500),
    last_login: new Date(1562608500),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57054,
    is_activated: true,
    signed_up_on: new Date(1562533200),
    last_login: new Date(1562533200),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85581,
    is_activated: true,
    signed_up_on: new Date(1564238760),
    last_login: new Date(1564238820),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79809,
    is_activated: true,
    signed_up_on: new Date(1564162680),
    last_login: new Date(1564168320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80586,
    is_activated: true,
    signed_up_on: new Date(1564169100),
    last_login: new Date(1564169160),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68376,
    is_activated: true,
    signed_up_on: new Date(1562878980),
    last_login: new Date(1562879100),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54834,
    is_activated: true,
    signed_up_on: new Date(1562474220),
    last_login: new Date(1562474220),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81474,
    is_activated: true,
    signed_up_on: new Date(1564175160),
    last_login: new Date(1564175280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82029,
    is_activated: true,
    signed_up_on: new Date(1564180980),
    last_login: new Date(1564180980),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73149,
    is_activated: true,
    signed_up_on: new Date(1563451440),
    last_login: new Date(1563451440),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82362,
    is_activated: true,
    signed_up_on: new Date(1564186320),
    last_login: new Date(1564186380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 69930,
    is_activated: true,
    signed_up_on: new Date(1562997720),
    last_login: new Date(1562997840),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71706,
    is_activated: true,
    signed_up_on: new Date(1563156240),
    last_login: new Date(1563156240),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 74925,
    is_activated: true,
    signed_up_on: new Date(1563781500),
    last_login: new Date(1563781560),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78477,
    is_activated: true,
    signed_up_on: new Date(1564151700),
    last_login: new Date(1564151700),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52170,
    is_activated: true,
    signed_up_on: new Date(1562455380),
    last_login: new Date(1562455380),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 54945,
    is_activated: true,
    signed_up_on: new Date(1562476560),
    last_login: new Date(1562476620),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65379,
    is_activated: true,
    signed_up_on: new Date(1562707020),
    last_login: new Date(1562707020),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62049,
    is_activated: true,
    signed_up_on: new Date(1562627280),
    last_login: new Date(1562641800),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57165,
    is_activated: true,
    signed_up_on: new Date(1562535660),
    last_login: new Date(1562535720),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70041,
    is_activated: true,
    signed_up_on: new Date(1562997840),
    last_login: new Date(1562997840),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68487,
    is_activated: true,
    signed_up_on: new Date(1562882700),
    last_login: new Date(1562882880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76701,
    is_activated: true,
    signed_up_on: new Date(1564116960),
    last_login: new Date(1564375860),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80697,
    is_activated: true,
    signed_up_on: new Date(1564169700),
    last_login: new Date(1564169820),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73260,
    is_activated: true,
    signed_up_on: new Date(1563610440),
    last_login: new Date(1563610440),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 71817,
    is_activated: true,
    signed_up_on: new Date(1563157620),
    last_login: new Date(1563157620),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63714,
    is_activated: true,
    signed_up_on: new Date(1562648340),
    last_login: new Date(1562648400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 67044,
    is_activated: true,
    signed_up_on: new Date(1562783640),
    last_login: new Date(1562783700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75036,
    is_activated: true,
    signed_up_on: new Date(1563782160),
    last_login: new Date(1563782220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 79920,
    is_activated: true,
    signed_up_on: new Date(1564163040),
    last_login: new Date(1564317000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 59274,
    is_activated: true,
    signed_up_on: new Date(1562580540),
    last_login: new Date(1562580540),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81585,
    is_activated: true,
    signed_up_on: new Date(1564176600),
    last_login: new Date(1564176840),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 80808,
    is_activated: true,
    signed_up_on: new Date(1564170180),
    last_login: new Date(1564187160),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82584,
    is_activated: true,
    signed_up_on: new Date(1564190520),
    last_login: new Date(1564226220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82473,
    is_activated: true,
    signed_up_on: new Date(1564189200),
    last_login: new Date(1564189260),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57276,
    is_activated: true,
    signed_up_on: new Date(1562537640),
    last_login: new Date(1562537700),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62160,
    is_activated: true,
    signed_up_on: new Date(1562629440),
    last_login: new Date(1562629440),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63825,
    is_activated: true,
    signed_up_on: new Date(1562649660),
    last_login: new Date(1562649660),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52281,
    is_activated: false,
    signed_up_on: new Date(1562456340),
    last_login: new Date(1562456340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 59385,
    is_activated: true,
    signed_up_on: new Date(1562586060),
    last_login: new Date(1562586120),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 50505,
    is_activated: true,
    signed_up_on: new Date(1562306340),
    last_login: new Date(1562306340),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 62271,
    is_activated: true,
    signed_up_on: new Date(1562629440),
    last_login: new Date(1562629440),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 63936,
    is_activated: true,
    signed_up_on: new Date(1562649660),
    last_login: new Date(1562649660),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 65490,
    is_activated: true,
    signed_up_on: new Date(1562711100),
    last_login: new Date(1562711220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55167,
    is_activated: true,
    signed_up_on: new Date(1562482500),
    last_login: new Date(1562482500),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 52392,
    is_activated: true,
    signed_up_on: new Date(1562458320),
    last_login: new Date(1562458320),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55500,
    is_activated: true,
    signed_up_on: new Date(1562508060),
    last_login: new Date(1562508300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70263,
    is_activated: true,
    signed_up_on: new Date(1563036900),
    last_login: new Date(1563036900),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 57387,
    is_activated: true,
    signed_up_on: new Date(1562543760),
    last_login: new Date(1562543820),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70152,
    is_activated: true,
    signed_up_on: new Date(1563004260),
    last_login: new Date(1563004320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68598,
    is_activated: true,
    signed_up_on: new Date(1562884620),
    last_login: new Date(1562884680),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 75147,
    is_activated: true,
    signed_up_on: new Date(1563785220),
    last_login: new Date(1563787980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 73371,
    is_activated: true,
    signed_up_on: new Date(1563614520),
    last_login: new Date(1563614580),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 55056,
    is_activated: true,
    signed_up_on: new Date(1562477460),
    last_login: new Date(1562477580),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91686,
    is_activated: true,
    signed_up_on: new Date(1564332600),
    last_login: new Date(1564332660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86580,
    is_activated: true,
    signed_up_on: new Date(1564248900),
    last_login: new Date(1564683000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90909,
    is_activated: true,
    signed_up_on: new Date(1564324920),
    last_login: new Date(1564324980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 85803,
    is_activated: true,
    signed_up_on: new Date(1564239600),
    last_login: new Date(1564239960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94572,
    is_activated: true,
    signed_up_on: new Date(1564357020),
    last_login: new Date(1564357080),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95460,
    is_activated: true,
    signed_up_on: new Date(1564367160),
    last_login: new Date(1564367220),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84582,
    is_activated: true,
    signed_up_on: new Date(1564225740),
    last_login: new Date(1564225740),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93018,
    is_activated: true,
    signed_up_on: new Date(1564342740),
    last_login: new Date(1564368360),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87579,
    is_activated: true,
    signed_up_on: new Date(1564256280),
    last_login: new Date(1564256280),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99234,
    is_activated: true,
    signed_up_on: new Date(1564455420),
    last_login: new Date(1564861500),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82806,
    is_activated: false,
    signed_up_on: new Date(1564193400),
    last_login: new Date(1564193400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 82917,
    is_activated: true,
    signed_up_on: new Date(1564193460),
    last_login: new Date(1564193460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 72372,
    is_activated: true,
    signed_up_on: new Date(1563336600),
    last_login: new Date(1564446600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 90021,
    is_activated: true,
    signed_up_on: new Date(1564285140),
    last_login: new Date(1564285200),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97458,
    is_activated: true,
    signed_up_on: new Date(1564432140),
    last_login: new Date(1564432140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98346,
    is_activated: true,
    signed_up_on: new Date(1564447620),
    last_login: new Date(1564447740),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99345,
    is_activated: true,
    signed_up_on: new Date(1564465920),
    last_login: new Date(1564465920),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 100344,
    is_activated: true,
    signed_up_on: new Date(1564603020),
    last_login: new Date(1564603320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96459,
    is_activated: true,
    signed_up_on: new Date(1564402920),
    last_login: new Date(1564402980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91797,
    is_activated: true,
    signed_up_on: new Date(1564333560),
    last_login: new Date(1564442400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88467,
    is_activated: true,
    signed_up_on: new Date(1564264020),
    last_login: new Date(1564264080),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85914,
    is_activated: true,
    signed_up_on: new Date(1564239960),
    last_login: new Date(1564240020),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94683,
    is_activated: true,
    signed_up_on: new Date(1564358400),
    last_login: new Date(1564358460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83028,
    is_activated: true,
    signed_up_on: new Date(1564194720),
    last_login: new Date(1564306140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95571,
    is_activated: true,
    signed_up_on: new Date(1564367640),
    last_login: new Date(1564367640),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92907,
    is_activated: true,
    signed_up_on: new Date(1564342740),
    last_login: new Date(1564365600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87690,
    is_activated: true,
    signed_up_on: new Date(1564256580),
    last_login: new Date(1564256640),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89577,
    is_activated: true,
    signed_up_on: new Date(1564281300),
    last_login: new Date(1564281300),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93795,
    is_activated: true,
    signed_up_on: new Date(1564346820),
    last_login: new Date(1564347000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91020,
    is_activated: true,
    signed_up_on: new Date(1564326480),
    last_login: new Date(1564326480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89244,
    is_activated: true,
    signed_up_on: new Date(1564277760),
    last_login: new Date(1564277820),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92019,
    is_activated: true,
    signed_up_on: new Date(1564338180),
    last_login: new Date(1564338240),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97569,
    is_activated: true,
    signed_up_on: new Date(1564432200),
    last_login: new Date(1564432260),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99456,
    is_activated: true,
    signed_up_on: new Date(1564465980),
    last_login: new Date(1564465980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 100455,
    is_activated: true,
    signed_up_on: new Date(1564605960),
    last_login: new Date(1564606020),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 70707,
    is_activated: true,
    signed_up_on: new Date(1563083580),
    last_login: new Date(1563083580),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 46398,
    is_activated: true,
    signed_up_on: new Date(1559700780),
    last_login: new Date(1565044020),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 71595,
    is_activated: true,
    signed_up_on: new Date(1563155580),
    last_login: new Date(1564448880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95682,
    is_activated: true,
    signed_up_on: new Date(1564371600),
    last_login: new Date(1564371660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93906,
    is_activated: true,
    signed_up_on: new Date(1564347660),
    last_login: new Date(1564347660),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84693,
    is_activated: false,
    signed_up_on: new Date(1564232880),
    last_login: new Date(1564233120),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91908,
    is_activated: true,
    signed_up_on: new Date(1564333800),
    last_login: new Date(1564333920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94794,
    is_activated: true,
    signed_up_on: new Date(1564358880),
    last_login: new Date(1564358940),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92130,
    is_activated: true,
    signed_up_on: new Date(1564339080),
    last_login: new Date(1564339140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88578,
    is_activated: true,
    signed_up_on: new Date(1564266540),
    last_login: new Date(1564266540),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83139,
    is_activated: true,
    signed_up_on: new Date(1564196700),
    last_login: new Date(1564196760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86691,
    is_activated: true,
    signed_up_on: new Date(1564249800),
    last_login: new Date(1564249860),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97680,
    is_activated: true,
    signed_up_on: new Date(1564432920),
    last_login: new Date(1564432980),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87801,
    is_activated: true,
    signed_up_on: new Date(1564256700),
    last_login: new Date(1564256760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86025,
    is_activated: true,
    signed_up_on: new Date(1564240020),
    last_login: new Date(1564240020),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90132,
    is_activated: true,
    signed_up_on: new Date(1564288200),
    last_login: new Date(1564288200),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96570,
    is_activated: true,
    signed_up_on: new Date(1564405380),
    last_login: new Date(1564405500),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90798,
    is_activated: true,
    signed_up_on: new Date(1564324740),
    last_login: new Date(1564324740),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98457,
    is_activated: false,
    signed_up_on: new Date(1564449120),
    last_login: new Date(1564449120),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 99567,
    is_activated: true,
    signed_up_on: new Date(1564468980),
    last_login: new Date(1564468980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86802,
    is_activated: true,
    signed_up_on: new Date(1564250280),
    last_login: new Date(1564250280),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 100566,
    is_activated: true,
    signed_up_on: new Date(1564606080),
    last_login: new Date(1564606140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76590,
    is_activated: true,
    signed_up_on: new Date(1564116420),
    last_login: new Date(1564116420),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95793,
    is_activated: true,
    signed_up_on: new Date(1564372260),
    last_login: new Date(1564372380),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93129,
    is_activated: true,
    signed_up_on: new Date(1564343700),
    last_login: new Date(1564343760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84804,
    is_activated: true,
    signed_up_on: new Date(1564234200),
    last_login: new Date(1564234320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96681,
    is_activated: true,
    signed_up_on: new Date(1564413540),
    last_login: new Date(1564413840),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78699,
    is_activated: true,
    signed_up_on: new Date(1564155540),
    last_login: new Date(1564354860),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94017,
    is_activated: true,
    signed_up_on: new Date(1564348320),
    last_login: new Date(1564348320),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97791,
    is_activated: true,
    signed_up_on: new Date(1564435140),
    last_login: new Date(1564435140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94905,
    is_activated: true,
    signed_up_on: new Date(1564359600),
    last_login: new Date(1564359660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 78810,
    is_activated: true,
    signed_up_on: new Date(1564156500),
    last_login: new Date(1564262880),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90243,
    is_activated: true,
    signed_up_on: new Date(1564288560),
    last_login: new Date(1564288560),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92241,
    is_activated: true,
    signed_up_on: new Date(1564339740),
    last_login: new Date(1564340100),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83250,
    is_activated: true,
    signed_up_on: new Date(1564197180),
    last_login: new Date(1564197240),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98568,
    is_activated: true,
    signed_up_on: new Date(1564449600),
    last_login: new Date(1564449660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99678,
    is_activated: true,
    signed_up_on: new Date(1564488540),
    last_login: new Date(1564488600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97902,
    is_activated: true,
    signed_up_on: new Date(1564437360),
    last_login: new Date(1565107920),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91131,
    is_activated: true,
    signed_up_on: new Date(1564329780),
    last_login: new Date(1564329840),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88023,
    is_activated: true,
    signed_up_on: new Date(1564260480),
    last_login: new Date(1564260600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95904,
    is_activated: true,
    signed_up_on: new Date(1564372800),
    last_login: new Date(1564372860),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96792,
    is_activated: true,
    signed_up_on: new Date(1564418340),
    last_login: new Date(1564418400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83361,
    is_activated: true,
    signed_up_on: new Date(1564197900),
    last_login: new Date(1564197960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84915,
    is_activated: true,
    signed_up_on: new Date(1564234380),
    last_login: new Date(1564234380),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85470,
    is_activated: true,
    signed_up_on: new Date(1564238160),
    last_login: new Date(1564238160),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88689,
    is_activated: true,
    signed_up_on: new Date(1564266960),
    last_login: new Date(1564267020),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95016,
    is_activated: true,
    signed_up_on: new Date(1564360140),
    last_login: new Date(1564360320),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92352,
    is_activated: false,
    signed_up_on: new Date(1564340100),
    last_login: new Date(1564340100),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 89799,
    is_activated: true,
    signed_up_on: new Date(1564282680),
    last_login: new Date(1564282680),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86913,
    is_activated: true,
    signed_up_on: new Date(1564250460),
    last_login: new Date(1564250460),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93240,
    is_activated: true,
    signed_up_on: new Date(1564344240),
    last_login: new Date(1564344300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87024,
    is_activated: true,
    signed_up_on: new Date(1564250940),
    last_login: new Date(1564250940),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98679,
    is_activated: false,
    signed_up_on: new Date(1564449600),
    last_login: new Date(1564449600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 99789,
    is_activated: true,
    signed_up_on: new Date(1564491720),
    last_login: new Date(1564491720),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96015,
    is_activated: true,
    signed_up_on: new Date(1564374300),
    last_login: new Date(1564374300),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83472,
    is_activated: true,
    signed_up_on: new Date(1564198860),
    last_login: new Date(1564198920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96903,
    is_activated: true,
    signed_up_on: new Date(1564425720),
    last_login: new Date(1564425840),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98013,
    is_activated: true,
    signed_up_on: new Date(1564437600),
    last_login: new Date(1564437600),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45621,
    is_activated: true,
    signed_up_on: new Date(1559523600),
    last_login: new Date(1564956420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 91242,
    is_activated: true,
    signed_up_on: new Date(1564330020),
    last_login: new Date(1564330140),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92463,
    is_activated: true,
    signed_up_on: new Date(1564340280),
    last_login: new Date(1564340280),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85026,
    is_activated: true,
    signed_up_on: new Date(1564234620),
    last_login: new Date(1564268460),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86136,
    is_activated: true,
    signed_up_on: new Date(1564240860),
    last_login: new Date(1564240920),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88134,
    is_activated: true,
    signed_up_on: new Date(1564260660),
    last_login: new Date(1564260660),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76923,
    is_activated: true,
    signed_up_on: new Date(1564118160),
    last_login: new Date(1564363500),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88800,
    is_activated: true,
    signed_up_on: new Date(1564267680),
    last_login: new Date(1564267680),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93351,
    is_activated: true,
    signed_up_on: new Date(1564344780),
    last_login: new Date(1564344780),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94128,
    is_activated: true,
    signed_up_on: new Date(1564351620),
    last_login: new Date(1564351620),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94239,
    is_activated: true,
    signed_up_on: new Date(1564352760),
    last_login: new Date(1564352880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84249,
    is_activated: true,
    signed_up_on: new Date(1564209720),
    last_login: new Date(1564260660),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88911,
    is_activated: true,
    signed_up_on: new Date(1564270860),
    last_login: new Date(1564270860),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85137,
    is_activated: true,
    signed_up_on: new Date(1564235220),
    last_login: new Date(1564235280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96126,
    is_activated: true,
    signed_up_on: new Date(1564375980),
    last_login: new Date(1564375980),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98790,
    is_activated: true,
    signed_up_on: new Date(1564452000),
    last_login: new Date(1564452000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95127,
    is_activated: true,
    signed_up_on: new Date(1564362420),
    last_login: new Date(1564362420),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99900,
    is_activated: true,
    signed_up_on: new Date(1564510620),
    last_login: new Date(1564510620),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 81141,
    is_activated: true,
    signed_up_on: new Date(1564172520),
    last_login: new Date(1564172520),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83583,
    is_activated: true,
    signed_up_on: new Date(1564199220),
    last_login: new Date(1564199280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 83694,
    is_activated: true,
    signed_up_on: new Date(1564199400),
    last_login: new Date(1564199400),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86247,
    is_activated: true,
    signed_up_on: new Date(1564241220),
    last_login: new Date(1564241400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90354,
    is_activated: true,
    signed_up_on: new Date(1564291200),
    last_login: new Date(1564291200),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87135,
    is_activated: true,
    signed_up_on: new Date(1564252080),
    last_login: new Date(1564278960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97014,
    is_activated: true,
    signed_up_on: new Date(1564426980),
    last_login: new Date(1564426980),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98124,
    is_activated: true,
    signed_up_on: new Date(1564439280),
    last_login: new Date(1564439340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91353,
    is_activated: true,
    signed_up_on: new Date(1564330680),
    last_login: new Date(1564330740),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92574,
    is_activated: true,
    signed_up_on: new Date(1564340760),
    last_login: new Date(1564340880),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87246,
    is_activated: true,
    signed_up_on: new Date(1564254420),
    last_login: new Date(1564254480),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88245,
    is_activated: true,
    signed_up_on: new Date(1564261260),
    last_login: new Date(1564437060),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98901,
    is_activated: false,
    signed_up_on: new Date(1564452300),
    last_login: new Date(1564452300),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 100011,
    is_activated: true,
    signed_up_on: new Date(1564516680),
    last_login: new Date(1564516740),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 83805,
    is_activated: true,
    signed_up_on: new Date(1564200060),
    last_login: new Date(1564375800),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97125,
    is_activated: true,
    signed_up_on: new Date(1564427160),
    last_login: new Date(1564427160),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93684,
    is_activated: true,
    signed_up_on: new Date(1564346700),
    last_login: new Date(1564346760),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95238,
    is_activated: false,
    signed_up_on: new Date(1564363680),
    last_login: new Date(1564363680),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 96237,
    is_activated: true,
    signed_up_on: new Date(1564379220),
    last_login: new Date(1564379400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 98235,
    is_activated: true,
    signed_up_on: new Date(1564441140),
    last_login: new Date(1564441140),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90465,
    is_activated: true,
    signed_up_on: new Date(1564292040),
    last_login: new Date(1564292040),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 76479,
    is_activated: true,
    signed_up_on: new Date(1564100340),
    last_login: new Date(1564100400),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85692,
    is_activated: true,
    signed_up_on: new Date(1564239060),
    last_login: new Date(1564239060),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85248,
    is_activated: true,
    signed_up_on: new Date(1564235940),
    last_login: new Date(1564315500),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 91464,
    is_activated: true,
    signed_up_on: new Date(1564331400),
    last_login: new Date(1564413420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92685,
    is_activated: true,
    signed_up_on: new Date(1564341480),
    last_login: new Date(1564341480),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93462,
    is_activated: true,
    signed_up_on: new Date(1564345440),
    last_login: new Date(1564345440),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94350,
    is_activated: true,
    signed_up_on: new Date(1564353180),
    last_login: new Date(1564353180),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 99012,
    is_activated: true,
    signed_up_on: new Date(1564452480),
    last_login: new Date(1564452540),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 88356,
    is_activated: true,
    signed_up_on: new Date(1564262280),
    last_login: new Date(1564262340),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 61161,
    is_activated: true,
    signed_up_on: new Date(1562616000),
    last_login: new Date(1562734860),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 96348,
    is_activated: true,
    signed_up_on: new Date(1564386360),
    last_login: new Date(1564386600),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 92796,
    is_activated: true,
    signed_up_on: new Date(1564342140),
    last_login: new Date(1564342200),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 100122,
    is_activated: false,
    signed_up_on: new Date(1564551420),
    last_login: new Date(1564551420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 89022,
    is_activated: true,
    signed_up_on: new Date(1564274580),
    last_login: new Date(1564274640),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 85359,
    is_activated: true,
    signed_up_on: new Date(1564237680),
    last_login: new Date(1564237680),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 84138,
    is_activated: true,
    signed_up_on: new Date(1564203360),
    last_login: new Date(1564203420),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 93573,
    is_activated: false,
    signed_up_on: new Date(1564346280),
    last_login: new Date(1564346280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 86358,
    is_activated: true,
    signed_up_on: new Date(1564245420),
    last_login: new Date(1564245420),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 94461,
    is_activated: true,
    signed_up_on: new Date(1564356180),
    last_login: new Date(1564356240),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87357,
    is_activated: true,
    signed_up_on: new Date(1564255200),
    last_login: new Date(1564255200),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 97236,
    is_activated: true,
    signed_up_on: new Date(1564428360),
    last_login: new Date(1564428360),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 95349,
    is_activated: true,
    signed_up_on: new Date(1564365600),
    last_login: new Date(1564428900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 90576,
    is_activated: true,
    signed_up_on: new Date(1564298040),
    last_login: new Date(1564331280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45399,
    is_activated: true,
    signed_up_on: new Date(1559460540),
    last_login: new Date(1564980780),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 48729,
    is_activated: true,
    signed_up_on: new Date(1560681060),
    last_login: new Date(1561298280),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 70596,
    is_activated: true,
    signed_up_on: new Date(1563070800),
    last_login: new Date(1563070800),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 45288,
    is_activated: true,
    signed_up_on: new Date(1559454000),
    last_login: new Date(1565043960),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  SqlTestUser.create({
    user_id: 69486,
    is_activated: true,
    signed_up_on: new Date(1562985120),
    last_login: new Date(1562985180),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 64380,
    is_activated: true,
    signed_up_on: new Date(1562664840),
    last_login: new Date(1562664900),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 87912,
    is_activated: true,
    signed_up_on: new Date(1564257600),
    last_login: new Date(1564257600),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  SqlTestUser.create({
    user_id: 68265,
    is_activated: true,
    signed_up_on: new Date(1562876100),
    last_login: new Date(1562876220),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  SqlTestGoogleUser.create({
    id: 7659,
    user_id: 41625,
    browser_language_code: 'en',
    created_on: new Date(1557233880),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 7770,
    user_id: 41736,
    browser_language_code: 'en-GB',
    created_on: new Date(1557679320),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 7881,
    user_id: 41958,
    browser_language_code: 'en',
    created_on: new Date(1557761160),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 7992,
    user_id: 42513,
    browser_language_code: 'en',
    created_on: new Date(1558624500),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 8103,
    user_id: 42624,
    browser_language_code: 'en',
    created_on: new Date(1558755060),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8214,
    user_id: 43512,
    browser_language_code: 'en-GB',
    created_on: new Date(1558825800),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8325,
    user_id: 44622,
    browser_language_code: 'en',
    created_on: new Date(1559239560),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8436,
    user_id: 45732,
    browser_language_code: 'en',
    created_on: new Date(1559550540),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8547,
    user_id: 42291,
    browser_language_code: 'en-GB',
    created_on: new Date(1559614740),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 8658,
    user_id: 46065,
    browser_language_code: 'en-GB',
    created_on: new Date(1559633160),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8769,
    user_id: 46176,
    browser_language_code: 'en',
    created_on: new Date(1559643180),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 8880,
    user_id: 46842,
    browser_language_code: 'en',
    created_on: new Date(1559825640),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 8991,
    user_id: 43290,
    browser_language_code: 'en-US',
    created_on: new Date(1559830200),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 9102,
    user_id: 47175,
    browser_language_code: 'en',
    created_on: new Date(1560064140),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 9213,
    user_id: 47508,
    browser_language_code: 'en',
    created_on: new Date(1560150960),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 9324,
    user_id: 47841,
    browser_language_code: 'en',
    created_on: new Date(1560221100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 9435,
    user_id: 48618,
    browser_language_code: 'en',
    created_on: new Date(1560668700),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 9546,
    user_id: 49062,
    browser_language_code: 'en',
    created_on: new Date(1560725160),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 9657,
    user_id: 49728,
    browser_language_code: 'en',
    created_on: new Date(1561480140),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 9768,
    user_id: 50172,
    browser_language_code: 'en',
    created_on: new Date(1561820640),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 9879,
    user_id: 50505,
    browser_language_code: 'en',
    created_on: new Date(1562306340),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 9990,
    user_id: 50616,
    browser_language_code: 'en',
    created_on: new Date(1562321640),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 10101,
    user_id: 50727,
    browser_language_code: 'en-GB',
    created_on: new Date(1562328000),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 10212,
    user_id: 50838,
    browser_language_code: 'en-GB',
    created_on: new Date(1562365680),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 10323,
    user_id: 50949,
    browser_language_code: 'en',
    created_on: new Date(1562370960),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 10434,
    user_id: 51060,
    browser_language_code: 'en',
    created_on: new Date(1562371140),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 10545,
    user_id: 51282,
    browser_language_code: 'en',
    created_on: new Date(1562380980),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 10656,
    user_id: 52170,
    browser_language_code: 'en',
    created_on: new Date(1562455380),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 10767,
    user_id: 52392,
    browser_language_code: 'en',
    created_on: new Date(1562458320),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 10878,
    user_id: 53280,
    browser_language_code: 'ko',
    created_on: new Date(1562462700),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 10989,
    user_id: 53724,
    browser_language_code: 'en',
    created_on: new Date(1562465340),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 11100,
    user_id: 53946,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562466060),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 11211,
    user_id: 54057,
    browser_language_code: 'en-GB',
    created_on: new Date(1562467560),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11322,
    user_id: 52503,
    browser_language_code: 'en',
    created_on: new Date(1562467980),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11433,
    user_id: 54279,
    browser_language_code: 'en',
    created_on: new Date(1562468460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11544,
    user_id: 54723,
    browser_language_code: 'en-GB',
    created_on: new Date(1562472900),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11655,
    user_id: 54834,
    browser_language_code: 'en',
    created_on: new Date(1562474220),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11766,
    user_id: 55167,
    browser_language_code: 'en',
    created_on: new Date(1562482500),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11877,
    user_id: 55389,
    browser_language_code: 'en',
    created_on: new Date(1562498100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 11988,
    user_id: 55944,
    browser_language_code: 'en',
    created_on: new Date(1562515920),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 12099,
    user_id: 56277,
    browser_language_code: 'en',
    created_on: new Date(1562524260),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 12210,
    user_id: 56499,
    browser_language_code: 'fr',
    created_on: new Date(1562527620),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 12321,
    user_id: 56721,
    browser_language_code: 'en',
    created_on: new Date(1562531460),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 12432,
    user_id: 57609,
    browser_language_code: 'en',
    created_on: new Date(1562554320),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 12543,
    user_id: 57942,
    browser_language_code: 'en',
    created_on: new Date(1562561460),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 12654,
    user_id: 58053,
    browser_language_code: 'en',
    created_on: new Date(1562561640),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 12765,
    user_id: 58164,
    browser_language_code: 'en',
    created_on: new Date(1562562240),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 12876,
    user_id: 58275,
    browser_language_code: 'en',
    created_on: new Date(1562562600),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 12987,
    user_id: 58608,
    browser_language_code: 'en',
    created_on: new Date(1562566140),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13098,
    user_id: 58941,
    browser_language_code: 'en',
    created_on: new Date(1562570220),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13209,
    user_id: 59163,
    browser_language_code: 'en',
    created_on: new Date(1562572320),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13320,
    user_id: 59718,
    browser_language_code: 'en-GB',
    created_on: new Date(1562594820),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13431,
    user_id: 60273,
    browser_language_code: 'en',
    created_on: new Date(1562608500),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13542,
    user_id: 60384,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562610180),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13653,
    user_id: 60717,
    browser_language_code: 'en',
    created_on: new Date(1562612460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13764,
    user_id: 60939,
    browser_language_code: 'en',
    created_on: new Date(1562614860),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 13875,
    user_id: 61383,
    browser_language_code: 'en-GB',
    created_on: new Date(1562616420),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 13986,
    user_id: 61494,
    browser_language_code: 'en',
    created_on: new Date(1562617680),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14097,
    user_id: 61605,
    browser_language_code: 'en',
    created_on: new Date(1562617860),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14208,
    user_id: 61716,
    browser_language_code: 'en',
    created_on: new Date(1562623740),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 14319,
    user_id: 62160,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562629440),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 14430,
    user_id: 62271,
    browser_language_code: 'en',
    created_on: new Date(1562629440),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14541,
    user_id: 62604,
    browser_language_code: 'en-GB',
    created_on: new Date(1562634480),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 14652,
    user_id: 62715,
    browser_language_code: 'en',
    created_on: new Date(1562637780),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14763,
    user_id: 62826,
    browser_language_code: 'en',
    created_on: new Date(1562638020),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14874,
    user_id: 62937,
    browser_language_code: 'en',
    created_on: new Date(1562639100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 14985,
    user_id: 63048,
    browser_language_code: 'en',
    created_on: new Date(1562639340),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15096,
    user_id: 63159,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562639640),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15207,
    user_id: 48174,
    browser_language_code: 'es-419',
    created_on: new Date(1562640960),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15318,
    user_id: 63270,
    browser_language_code: 'en',
    created_on: new Date(1562641500),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15429,
    user_id: 63381,
    browser_language_code: 'en',
    created_on: new Date(1562642280),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15540,
    user_id: 63825,
    browser_language_code: 'en',
    created_on: new Date(1562649660),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15651,
    user_id: 63936,
    browser_language_code: 'en-GB',
    created_on: new Date(1562649660),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15762,
    user_id: 64158,
    browser_language_code: 'en',
    created_on: new Date(1562656140),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 15873,
    user_id: 64269,
    browser_language_code: 'en',
    created_on: new Date(1562664480),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 15984,
    user_id: 64824,
    browser_language_code: 'en',
    created_on: new Date(1562694540),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 16095,
    user_id: 65157,
    browser_language_code: 'en',
    created_on: new Date(1562702220),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 16206,
    user_id: 65268,
    browser_language_code: 'en-GB',
    created_on: new Date(1562705040),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16317,
    user_id: 65379,
    browser_language_code: 'en-GB',
    created_on: new Date(1562707020),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 16428,
    user_id: 65601,
    browser_language_code: 'en',
    created_on: new Date(1562713740),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16539,
    user_id: 66045,
    browser_language_code: 'en',
    created_on: new Date(1562729940),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16650,
    user_id: 66933,
    browser_language_code: 'en-GB',
    created_on: new Date(1562781540),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16761,
    user_id: 67599,
    browser_language_code: 'en',
    created_on: new Date(1562799180),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16872,
    user_id: 67932,
    browser_language_code: 'en',
    created_on: new Date(1562805540),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 16983,
    user_id: 68043,
    browser_language_code: 'en',
    created_on: new Date(1562840520),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 17094,
    user_id: 69375,
    browser_language_code: 'en-GB',
    created_on: new Date(1562978880),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17205,
    user_id: 69597,
    browser_language_code: 'pt-BR',
    created_on: new Date(1562990160),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17316,
    user_id: 69708,
    browser_language_code: 'en-GB',
    created_on: new Date(1562995320),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 17427,
    user_id: 70041,
    browser_language_code: 'en-GB',
    created_on: new Date(1562997840),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 17538,
    user_id: 70263,
    browser_language_code: 'en',
    created_on: new Date(1563036900),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17649,
    user_id: 70707,
    browser_language_code: 'en',
    created_on: new Date(1563083580),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17760,
    user_id: 70929,
    browser_language_code: 'en-GB',
    created_on: new Date(1563119100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17871,
    user_id: 71151,
    browser_language_code: 'ko',
    created_on: new Date(1563121980),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 17982,
    user_id: 71373,
    browser_language_code: 'en',
    created_on: new Date(1563129480),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 18093,
    user_id: 71706,
    browser_language_code: 'en-GB',
    created_on: new Date(1563156240),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 18204,
    user_id: 71817,
    browser_language_code: 'en',
    created_on: new Date(1563157620),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 18315,
    user_id: 71928,
    browser_language_code: 'en-GB',
    created_on: new Date(1563215820),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 18426,
    user_id: 34299,
    browser_language_code: 'en',
    created_on: new Date(1563336540),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 18537,
    user_id: 72483,
    browser_language_code: 'en-GB',
    created_on: new Date(1563348540),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 18648,
    user_id: 72705,
    browser_language_code: 'en',
    created_on: new Date(1563358800),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 18759,
    user_id: 72927,
    browser_language_code: 'en',
    created_on: new Date(1563362460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 18870,
    user_id: 73149,
    browser_language_code: 'en-GB',
    created_on: new Date(1563451440),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 18981,
    user_id: 73482,
    browser_language_code: 'en-GB',
    created_on: new Date(1563618240),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19092,
    user_id: 73926,
    browser_language_code: 'en-GB',
    created_on: new Date(1563684000),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19203,
    user_id: 75147,
    browser_language_code: 'en',
    created_on: new Date(1563785220),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19314,
    user_id: 75258,
    browser_language_code: 'en',
    created_on: new Date(1563790440),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 19425,
    user_id: 75591,
    browser_language_code: 'el',
    created_on: new Date(1563808020),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19536,
    user_id: 75702,
    browser_language_code: 'en-GB',
    created_on: new Date(1563819000),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19647,
    user_id: 76035,
    browser_language_code: 'en',
    created_on: new Date(1563852240),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19758,
    user_id: 76146,
    browser_language_code: 'vi',
    created_on: new Date(1563857100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 19869,
    user_id: 76923,
    browser_language_code: 'en',
    created_on: new Date(1564118160),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 19980,
    user_id: 77145,
    browser_language_code: 'en',
    created_on: new Date(1564119780),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 20091,
    user_id: 77256,
    browser_language_code: 'en',
    created_on: new Date(1564119900),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20202,
    user_id: 77478,
    browser_language_code: 'en',
    created_on: new Date(1564121520),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20313,
    user_id: 77700,
    browser_language_code: 'en',
    created_on: new Date(1564125300),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20424,
    user_id: 78033,
    browser_language_code: 'en-GB',
    created_on: new Date(1564134120),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20535,
    user_id: 78144,
    browser_language_code: 'en',
    created_on: new Date(1564135140),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20646,
    user_id: 78477,
    browser_language_code: 'en',
    created_on: new Date(1564151700),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 20757,
    user_id: 78699,
    browser_language_code: 'en',
    created_on: new Date(1564155540),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 20868,
    user_id: 78810,
    browser_language_code: 'en',
    created_on: new Date(1564156500),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 20979,
    user_id: 79254,
    browser_language_code: 'en',
    created_on: new Date(1564160460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 21090,
    user_id: 80475,
    browser_language_code: 'en',
    created_on: new Date(1564168740),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 21201,
    user_id: 81030,
    browser_language_code: 'fr',
    created_on: new Date(1564171860),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 21312,
    user_id: 81141,
    browser_language_code: 'en',
    created_on: new Date(1564172520),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 21423,
    user_id: 81363,
    browser_language_code: 'en',
    created_on: new Date(1564173840),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 21534,
    user_id: 81807,
    browser_language_code: 'en-GB',
    created_on: new Date(1564178820),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 21645,
    user_id: 81918,
    browser_language_code: 'ru',
    created_on: new Date(1564179480),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 21756,
    user_id: 82695,
    browser_language_code: 'en',
    created_on: new Date(1564190880),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 21867,
    user_id: 82917,
    browser_language_code: 'en-GB',
    created_on: new Date(1564193460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 21978,
    user_id: 83916,
    browser_language_code: 'en',
    created_on: new Date(1564201560),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 22089,
    user_id: 84027,
    browser_language_code: 'en',
    created_on: new Date(1564201620),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22200,
    user_id: 84471,
    browser_language_code: 'en',
    created_on: new Date(1564214700),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 29859,
    user_id: 105894,
    browser_language_code: 'en',
    created_on: new Date(1564950240),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22311,
    user_id: 84915,
    browser_language_code: 'en',
    created_on: new Date(1564234380),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 22422,
    user_id: 85359,
    browser_language_code: 'en',
    created_on: new Date(1564237680),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22533,
    user_id: 85470,
    browser_language_code: 'en',
    created_on: new Date(1564238160),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 22644,
    user_id: 85692,
    browser_language_code: 'en',
    created_on: new Date(1564239060),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22755,
    user_id: 86025,
    browser_language_code: 'en-GB',
    created_on: new Date(1564240020),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22866,
    user_id: 86358,
    browser_language_code: 'en-GB',
    created_on: new Date(1564245420),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 22977,
    user_id: 86802,
    browser_language_code: 'ko',
    created_on: new Date(1564250280),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 23088,
    user_id: 86913,
    browser_language_code: 'en',
    created_on: new Date(1564250460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 23199,
    user_id: 87024,
    browser_language_code: 'en',
    created_on: new Date(1564250940),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 23310,
    user_id: 87357,
    browser_language_code: 'en',
    created_on: new Date(1564255200),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 23421,
    user_id: 87579,
    browser_language_code: 'en',
    created_on: new Date(1564256280),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 23532,
    user_id: 87912,
    browser_language_code: 'en',
    created_on: new Date(1564257600),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 23643,
    user_id: 88134,
    browser_language_code: 'en',
    created_on: new Date(1564260660),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 23754,
    user_id: 88800,
    browser_language_code: 'en',
    created_on: new Date(1564267680),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 23865,
    user_id: 88911,
    browser_language_code: 'en',
    created_on: new Date(1564270860),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 23976,
    user_id: 89133,
    browser_language_code: 'en',
    created_on: new Date(1564277400),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 24087,
    user_id: 89355,
    browser_language_code: 'en',
    created_on: new Date(1564278360),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 24198,
    user_id: 89466,
    browser_language_code: 'en-GB',
    created_on: new Date(1564281120),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 24309,
    user_id: 89577,
    browser_language_code: 'en-GB',
    created_on: new Date(1564281300),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 24420,
    user_id: 90354,
    browser_language_code: 'en',
    created_on: new Date(1564291200),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 24531,
    user_id: 90465,
    browser_language_code: 'en-GB',
    created_on: new Date(1564292040),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 24642,
    user_id: 83028,
    browser_language_code: 'en',
    created_on: new Date(1564306140),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 24753,
    user_id: 90798,
    browser_language_code: 'en-GB',
    created_on: new Date(1564324740),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 24864,
    user_id: 91020,
    browser_language_code: 'en',
    created_on: new Date(1564326480),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 24975,
    user_id: 92463,
    browser_language_code: 'en',
    created_on: new Date(1564340280),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 25086,
    user_id: 92685,
    browser_language_code: 'en',
    created_on: new Date(1564341480),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 25197,
    user_id: 93351,
    browser_language_code: 'en',
    created_on: new Date(1564344780),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 25308,
    user_id: 93462,
    browser_language_code: 'en',
    created_on: new Date(1564345440),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 25419,
    user_id: 93906,
    browser_language_code: 'en',
    created_on: new Date(1564347660),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 25530,
    user_id: 94017,
    browser_language_code: 'en',
    created_on: new Date(1564348320),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 25641,
    user_id: 95127,
    browser_language_code: 'en-GB',
    created_on: new Date(1564362420),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 25752,
    user_id: 95571,
    browser_language_code: 'en',
    created_on: new Date(1564367640),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 25863,
    user_id: 96015,
    browser_language_code: 'en',
    created_on: new Date(1564374300),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 25974,
    user_id: 96126,
    browser_language_code: 'en',
    created_on: new Date(1564375980),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26085,
    user_id: 97014,
    browser_language_code: 'en',
    created_on: new Date(1564426980),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 26196,
    user_id: 97125,
    browser_language_code: 'en',
    created_on: new Date(1564427160),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 26307,
    user_id: 97347,
    browser_language_code: 'en',
    created_on: new Date(1564430400),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26418,
    user_id: 97791,
    browser_language_code: 'en',
    created_on: new Date(1564435140),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26529,
    user_id: 98013,
    browser_language_code: 'en',
    created_on: new Date(1564437600),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26640,
    user_id: 98235,
    browser_language_code: 'en',
    created_on: new Date(1564441140),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26751,
    user_id: 98790,
    browser_language_code: 'en',
    created_on: new Date(1564452000),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26862,
    user_id: 99123,
    browser_language_code: 'en',
    created_on: new Date(1564452840),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 26973,
    user_id: 99456,
    browser_language_code: 'en',
    created_on: new Date(1564465980),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 27084,
    user_id: 99567,
    browser_language_code: 'en',
    created_on: new Date(1564468980),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 27195,
    user_id: 99789,
    browser_language_code: 'en',
    created_on: new Date(1564491720),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 27306,
    user_id: 99900,
    browser_language_code: 'en',
    created_on: new Date(1564510620),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 27417,
    user_id: 100233,
    browser_language_code: 'en',
    created_on: new Date(1564596840),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 27528,
    user_id: 100899,
    browser_language_code: 'en',
    created_on: new Date(1564723200),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 27639,
    user_id: 101010,
    browser_language_code: 'en-GB',
    created_on: new Date(1564778340),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 27750,
    user_id: 101121,
    browser_language_code: 'en',
    created_on: new Date(1564782540),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 27861,
    user_id: 99234,
    browser_language_code: 'en',
    created_on: new Date(1564861500),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 27972,
    user_id: 101343,
    browser_language_code: 'en',
    created_on: new Date(1564900320),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 28083,
    user_id: 101565,
    browser_language_code: 'en',
    created_on: new Date(1564915200),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 28194,
    user_id: 102009,
    browser_language_code: 'en',
    created_on: new Date(1564927920),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 28305,
    user_id: 102342,
    browser_language_code: 'en',
    created_on: new Date(1564930380),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 28416,
    user_id: 102564,
    browser_language_code: 'en',
    created_on: new Date(1564931460),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 28527,
    user_id: 102675,
    browser_language_code: 'en',
    created_on: new Date(1564931640),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 28638,
    user_id: 102786,
    browser_language_code: 'en',
    created_on: new Date(1564932300),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 28749,
    user_id: 102897,
    browser_language_code: 'en',
    created_on: new Date(1564933440),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 28860,
    user_id: 103674,
    browser_language_code: 'en',
    created_on: new Date(1564938300),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 28971,
    user_id: 103785,
    browser_language_code: 'fr',
    created_on: new Date(1564939500),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 29082,
    user_id: 103896,
    browser_language_code: 'en',
    created_on: new Date(1564939920),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 29193,
    user_id: 104340,
    browser_language_code: 'en',
    created_on: new Date(1564942680),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 29304,
    user_id: 104784,
    browser_language_code: 'en',
    created_on: new Date(1564944540),
    device_cat: 'Tablet',
  });
  SqlTestGoogleUser.create({
    id: 29415,
    user_id: 105339,
    browser_language_code: 'en-GB',
    created_on: new Date(1564948560),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 29526,
    user_id: 105561,
    browser_language_code: 'fr',
    created_on: new Date(1564949640),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 29637,
    user_id: 105672,
    browser_language_code: 'fr',
    created_on: new Date(1564949820),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 29748,
    user_id: 105783,
    browser_language_code: 'en',
    created_on: new Date(1564950000),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 29970,
    user_id: 106338,
    browser_language_code: 'en',
    created_on: new Date(1564956060),
    device_cat: 'Mobile',
  });
  SqlTestGoogleUser.create({
    id: 30081,
    user_id: 106449,
    browser_language_code: 'en',
    created_on: new Date(1564956720),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 30192,
    user_id: 106782,
    browser_language_code: 'en',
    created_on: new Date(1564961100),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 30303,
    user_id: 107004,
    browser_language_code: 'en-GB',
    created_on: new Date(1564962360),
    device_cat: 'Desktop',
  });
  SqlTestGoogleUser.create({
    id: 30414,
    user_id: 107226,
    browser_language_code: 'en',
    created_on: new Date(1564963140),
    device_cat: 'Desktop',
  });
};

(async () => {
  await dropTables();
  await insertStuff();
})();
