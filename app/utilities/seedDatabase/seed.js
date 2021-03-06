import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const User = db.user;
const Role = db.role;
const sqltestuser = db.sqltestuser;
const sqltestgoogleuser = db.sqltestgoogleuser;

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

  await sqltestgoogleuser.create({
    id: 7659,
    user_id: 41625,
    browser_language_code: 'en',
    created_on: new Date(1557233880000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 7770,
    user_id: 41736,
    browser_language_code: 'en-GB',
    created_on: new Date(1557679320000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 7881,
    user_id: 41958,
    browser_language_code: 'en',
    created_on: new Date(1557761160000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 7992,
    user_id: 42513,
    browser_language_code: 'en',
    created_on: new Date(1558624500000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 8103,
    user_id: 42624,
    browser_language_code: 'en',
    created_on: new Date(1558755060000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8214,
    user_id: 43512,
    browser_language_code: 'en-GB',
    created_on: new Date(1558825800000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8325,
    user_id: 44622,
    browser_language_code: 'en',
    created_on: new Date(1559239560000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8436,
    user_id: 45732,
    browser_language_code: 'en',
    created_on: new Date(1559550540000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8547,
    user_id: 42291,
    browser_language_code: 'en-GB',
    created_on: new Date(1559614740000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 8658,
    user_id: 46065,
    browser_language_code: 'en-GB',
    created_on: new Date(1559633160000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8769,
    user_id: 46176,
    browser_language_code: 'en',
    created_on: new Date(1559643180000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 8880,
    user_id: 46842,
    browser_language_code: 'en',
    created_on: new Date(1559825640000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 8991,
    user_id: 43290,
    browser_language_code: 'en-US',
    created_on: new Date(1559830200000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 9102,
    user_id: 47175,
    browser_language_code: 'en',
    created_on: new Date(1560064140000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 9213,
    user_id: 47508,
    browser_language_code: 'en',
    created_on: new Date(1560150960000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 9324,
    user_id: 47841,
    browser_language_code: 'en',
    created_on: new Date(1560221100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 9435,
    user_id: 48618,
    browser_language_code: 'en',
    created_on: new Date(1560668700000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 9546,
    user_id: 49062,
    browser_language_code: 'en',
    created_on: new Date(1560725160000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 9657,
    user_id: 49728,
    browser_language_code: 'en',
    created_on: new Date(1561480140000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 9768,
    user_id: 50172,
    browser_language_code: 'en',
    created_on: new Date(1561820640000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 9879,
    user_id: 50505,
    browser_language_code: 'en',
    created_on: new Date(1562306340000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 9990,
    user_id: 50616,
    browser_language_code: 'en',
    created_on: new Date(1562321640000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 10101,
    user_id: 50727,
    browser_language_code: 'en-GB',
    created_on: new Date(1562328000000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 10212,
    user_id: 50838,
    browser_language_code: 'en-GB',
    created_on: new Date(1562365680000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 10323,
    user_id: 50949,
    browser_language_code: 'en',
    created_on: new Date(1562370960000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 10434,
    user_id: 51060,
    browser_language_code: 'en',
    created_on: new Date(1562371140000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 10545,
    user_id: 51282,
    browser_language_code: 'en',
    created_on: new Date(1562380980000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 10656,
    user_id: 52170,
    browser_language_code: 'en',
    created_on: new Date(1562455380000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 10767,
    user_id: 52392,
    browser_language_code: 'en',
    created_on: new Date(1562458320000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 10878,
    user_id: 53280,
    browser_language_code: 'ko',
    created_on: new Date(1562462700000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 10989,
    user_id: 53724,
    browser_language_code: 'en',
    created_on: new Date(1562465340000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 11100,
    user_id: 53946,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562466060000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 11211,
    user_id: 54057,
    browser_language_code: 'en-GB',
    created_on: new Date(1562467560000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11322,
    user_id: 52503,
    browser_language_code: 'en',
    created_on: new Date(1562467980000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11433,
    user_id: 54279,
    browser_language_code: 'en',
    created_on: new Date(1562468460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11544,
    user_id: 54723,
    browser_language_code: 'en-GB',
    created_on: new Date(1562472900000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11655,
    user_id: 54834,
    browser_language_code: 'en',
    created_on: new Date(1562474220000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11766,
    user_id: 55167,
    browser_language_code: 'en',
    created_on: new Date(1562482500000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11877,
    user_id: 55389,
    browser_language_code: 'en',
    created_on: new Date(1562498100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 11988,
    user_id: 55944,
    browser_language_code: 'en',
    created_on: new Date(1562515920000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 12099,
    user_id: 56277,
    browser_language_code: 'en',
    created_on: new Date(1562524260000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 12210,
    user_id: 56499,
    browser_language_code: 'fr',
    created_on: new Date(1562527620000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 12321,
    user_id: 56721,
    browser_language_code: 'en',
    created_on: new Date(1562531460000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 12432,
    user_id: 57609,
    browser_language_code: 'en',
    created_on: new Date(1562554320000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 12543,
    user_id: 57942,
    browser_language_code: 'en',
    created_on: new Date(1562561460000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 12654,
    user_id: 58053,
    browser_language_code: 'en',
    created_on: new Date(1562561640000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 12765,
    user_id: 58164,
    browser_language_code: 'en',
    created_on: new Date(1562562240000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 12876,
    user_id: 58275,
    browser_language_code: 'en',
    created_on: new Date(1562562600000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 12987,
    user_id: 58608,
    browser_language_code: 'en',
    created_on: new Date(1562566140000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13098,
    user_id: 58941,
    browser_language_code: 'en',
    created_on: new Date(1562570220000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13209,
    user_id: 59163,
    browser_language_code: 'en',
    created_on: new Date(1562572320000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13320,
    user_id: 59718,
    browser_language_code: 'en-GB',
    created_on: new Date(1562594820000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13431,
    user_id: 60273,
    browser_language_code: 'en',
    created_on: new Date(1562608500000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13542,
    user_id: 60384,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562610180000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13653,
    user_id: 60717,
    browser_language_code: 'en',
    created_on: new Date(1562612460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13764,
    user_id: 60939,
    browser_language_code: 'en',
    created_on: new Date(1562614860000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 13875,
    user_id: 61383,
    browser_language_code: 'en-GB',
    created_on: new Date(1562616420000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 13986,
    user_id: 61494,
    browser_language_code: 'en',
    created_on: new Date(1562617680000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14097,
    user_id: 61605,
    browser_language_code: 'en',
    created_on: new Date(1562617860000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14208,
    user_id: 61716,
    browser_language_code: 'en',
    created_on: new Date(1562623740000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 14319,
    user_id: 62160,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562629440000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 14430,
    user_id: 62271,
    browser_language_code: 'en',
    created_on: new Date(1562629440000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14541,
    user_id: 62604,
    browser_language_code: 'en-GB',
    created_on: new Date(1562634480000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 14652,
    user_id: 62715,
    browser_language_code: 'en',
    created_on: new Date(1562637780000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14763,
    user_id: 62826,
    browser_language_code: 'en',
    created_on: new Date(1562638020000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14874,
    user_id: 62937,
    browser_language_code: 'en',
    created_on: new Date(1562639100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 14985,
    user_id: 63048,
    browser_language_code: 'en',
    created_on: new Date(1562639340000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15096,
    user_id: 63159,
    browser_language_code: 'zh-CN',
    created_on: new Date(1562639640000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15207,
    user_id: 48174,
    browser_language_code: 'es-419',
    created_on: new Date(1562640960000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15318,
    user_id: 63270,
    browser_language_code: 'en',
    created_on: new Date(1562641500000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15429,
    user_id: 63381,
    browser_language_code: 'en',
    created_on: new Date(1562642280000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15540,
    user_id: 63825,
    browser_language_code: 'en',
    created_on: new Date(1562649660000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15651,
    user_id: 63936,
    browser_language_code: 'en-GB',
    created_on: new Date(1562649660000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15762,
    user_id: 64158,
    browser_language_code: 'en',
    created_on: new Date(1562656140000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 15873,
    user_id: 64269,
    browser_language_code: 'en',
    created_on: new Date(1562664480000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 15984,
    user_id: 64824,
    browser_language_code: 'en',
    created_on: new Date(1562694540000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 16095,
    user_id: 65157,
    browser_language_code: 'en',
    created_on: new Date(1562702220000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 16206,
    user_id: 65268,
    browser_language_code: 'en-GB',
    created_on: new Date(1562705040000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16317,
    user_id: 65379,
    browser_language_code: 'en-GB',
    created_on: new Date(1562707020000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 16428,
    user_id: 65601,
    browser_language_code: 'en',
    created_on: new Date(1562713740000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16539,
    user_id: 66045,
    browser_language_code: 'en',
    created_on: new Date(1562729940000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16650,
    user_id: 66933,
    browser_language_code: 'en-GB',
    created_on: new Date(1562781540000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16761,
    user_id: 67599,
    browser_language_code: 'en',
    created_on: new Date(1562799180000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16872,
    user_id: 67932,
    browser_language_code: 'en',
    created_on: new Date(1562805540000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 16983,
    user_id: 68043,
    browser_language_code: 'en',
    created_on: new Date(1562840520000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 17094,
    user_id: 69375,
    browser_language_code: 'en-GB',
    created_on: new Date(1562978880000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17205,
    user_id: 69597,
    browser_language_code: 'pt-BR',
    created_on: new Date(1562990160000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17316,
    user_id: 69708,
    browser_language_code: 'en-GB',
    created_on: new Date(1562995320000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 17427,
    user_id: 70041,
    browser_language_code: 'en-GB',
    created_on: new Date(1562997840000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 17538,
    user_id: 70263,
    browser_language_code: 'en',
    created_on: new Date(1563036900000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17649,
    user_id: 70707,
    browser_language_code: 'en',
    created_on: new Date(1563083580000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17760,
    user_id: 70929,
    browser_language_code: 'en-GB',
    created_on: new Date(1563119100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17871,
    user_id: 71151,
    browser_language_code: 'ko',
    created_on: new Date(1563121980000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 17982,
    user_id: 71373,
    browser_language_code: 'en',
    created_on: new Date(1563129480000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 18093,
    user_id: 71706,
    browser_language_code: 'en-GB',
    created_on: new Date(1563156240000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 18204,
    user_id: 71817,
    browser_language_code: 'en',
    created_on: new Date(1563157620000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 18315,
    user_id: 71928,
    browser_language_code: 'en-GB',
    created_on: new Date(1563215820000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 18426,
    user_id: 34299,
    browser_language_code: 'en',
    created_on: new Date(1563336540000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 18537,
    user_id: 72483,
    browser_language_code: 'en-GB',
    created_on: new Date(1563348540000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 18648,
    user_id: 72705,
    browser_language_code: 'en',
    created_on: new Date(1563358800000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 18759,
    user_id: 72927,
    browser_language_code: 'en',
    created_on: new Date(1563362460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 18870,
    user_id: 73149,
    browser_language_code: 'en-GB',
    created_on: new Date(1563451440000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 18981,
    user_id: 73482,
    browser_language_code: 'en-GB',
    created_on: new Date(1563618240000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19092,
    user_id: 73926,
    browser_language_code: 'en-GB',
    created_on: new Date(1563684000000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19203,
    user_id: 75147,
    browser_language_code: 'en',
    created_on: new Date(1563785220000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19314,
    user_id: 75258,
    browser_language_code: 'en',
    created_on: new Date(1563790440000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 19425,
    user_id: 75591,
    browser_language_code: 'el',
    created_on: new Date(1563808020000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19536,
    user_id: 75702,
    browser_language_code: 'en-GB',
    created_on: new Date(1563819000000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19647,
    user_id: 76035,
    browser_language_code: 'en',
    created_on: new Date(1563852240000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19758,
    user_id: 76146,
    browser_language_code: 'vi',
    created_on: new Date(1563857100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 19869,
    user_id: 76923,
    browser_language_code: 'en',
    created_on: new Date(1564118160000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 19980,
    user_id: 77145,
    browser_language_code: 'en',
    created_on: new Date(1564119780000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 20091,
    user_id: 77256,
    browser_language_code: 'en',
    created_on: new Date(1564119900000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20202,
    user_id: 77478,
    browser_language_code: 'en',
    created_on: new Date(1564121520000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20313,
    user_id: 77700,
    browser_language_code: 'en',
    created_on: new Date(1564125300000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20424,
    user_id: 78033,
    browser_language_code: 'en-GB',
    created_on: new Date(1564134120000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20535,
    user_id: 78144,
    browser_language_code: 'en',
    created_on: new Date(1564135140000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20646,
    user_id: 78477,
    browser_language_code: 'en',
    created_on: new Date(1564151700000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 20757,
    user_id: 78699,
    browser_language_code: 'en',
    created_on: new Date(1564155540000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 20868,
    user_id: 78810,
    browser_language_code: 'en',
    created_on: new Date(1564156500000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 20979,
    user_id: 79254,
    browser_language_code: 'en',
    created_on: new Date(1564160460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 21090,
    user_id: 80475,
    browser_language_code: 'en',
    created_on: new Date(1564168740000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 21201,
    user_id: 81030,
    browser_language_code: 'fr',
    created_on: new Date(1564171860000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 21312,
    user_id: 81141,
    browser_language_code: 'en',
    created_on: new Date(1564172520000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 21423,
    user_id: 81363,
    browser_language_code: 'en',
    created_on: new Date(1564173840000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 21534,
    user_id: 81807,
    browser_language_code: 'en-GB',
    created_on: new Date(1564178820000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 21645,
    user_id: 81918,
    browser_language_code: 'ru',
    created_on: new Date(1564179480000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 21756,
    user_id: 82695,
    browser_language_code: 'en',
    created_on: new Date(1564190880000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 21867,
    user_id: 82917,
    browser_language_code: 'en-GB',
    created_on: new Date(1564193460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 21978,
    user_id: 83916,
    browser_language_code: 'en',
    created_on: new Date(1564201560000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 22089,
    user_id: 84027,
    browser_language_code: 'en',
    created_on: new Date(1564201620000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22200,
    user_id: 84471,
    browser_language_code: 'en',
    created_on: new Date(1564214700000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 29859,
    user_id: 105894,
    browser_language_code: 'en',
    created_on: new Date(1564950240000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22311,
    user_id: 84915,
    browser_language_code: 'en',
    created_on: new Date(1564234380000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 22422,
    user_id: 85359,
    browser_language_code: 'en',
    created_on: new Date(1564237680000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22533,
    user_id: 85470,
    browser_language_code: 'en',
    created_on: new Date(1564238160000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 22644,
    user_id: 85692,
    browser_language_code: 'en',
    created_on: new Date(1564239060000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22755,
    user_id: 86025,
    browser_language_code: 'en-GB',
    created_on: new Date(1564240020000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22866,
    user_id: 86358,
    browser_language_code: 'en-GB',
    created_on: new Date(1564245420000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 22977,
    user_id: 86802,
    browser_language_code: 'ko',
    created_on: new Date(1564250280000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 23088,
    user_id: 86913,
    browser_language_code: 'en',
    created_on: new Date(1564250460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 23199,
    user_id: 87024,
    browser_language_code: 'en',
    created_on: new Date(1564250940000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 23310,
    user_id: 87357,
    browser_language_code: 'en',
    created_on: new Date(1564255200000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 23421,
    user_id: 87579,
    browser_language_code: 'en',
    created_on: new Date(1564256280000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 23532,
    user_id: 87912,
    browser_language_code: 'en',
    created_on: new Date(1564257600000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 23643,
    user_id: 88134,
    browser_language_code: 'en',
    created_on: new Date(1564260660000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 23754,
    user_id: 88800,
    browser_language_code: 'en',
    created_on: new Date(1564267680000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 23865,
    user_id: 88911,
    browser_language_code: 'en',
    created_on: new Date(1564270860000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 23976,
    user_id: 89133,
    browser_language_code: 'en',
    created_on: new Date(1564277400000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 24087,
    user_id: 89355,
    browser_language_code: 'en',
    created_on: new Date(1564278360000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 24198,
    user_id: 89466,
    browser_language_code: 'en-GB',
    created_on: new Date(1564281120000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 24309,
    user_id: 89577,
    browser_language_code: 'en-GB',
    created_on: new Date(1564281300000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 24420,
    user_id: 90354,
    browser_language_code: 'en',
    created_on: new Date(1564291200000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 24531,
    user_id: 90465,
    browser_language_code: 'en-GB',
    created_on: new Date(1564292040000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 24642,
    user_id: 83028,
    browser_language_code: 'en',
    created_on: new Date(1564306140000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 24753,
    user_id: 90798,
    browser_language_code: 'en-GB',
    created_on: new Date(1564324740000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 24864,
    user_id: 91020,
    browser_language_code: 'en',
    created_on: new Date(1564326480000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 24975,
    user_id: 92463,
    browser_language_code: 'en',
    created_on: new Date(1564340280000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 25086,
    user_id: 92685,
    browser_language_code: 'en',
    created_on: new Date(1564341480000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 25197,
    user_id: 93351,
    browser_language_code: 'en',
    created_on: new Date(1564344780000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 25308,
    user_id: 93462,
    browser_language_code: 'en',
    created_on: new Date(1564345440000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 25419,
    user_id: 93906,
    browser_language_code: 'en',
    created_on: new Date(1564347660000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 25530,
    user_id: 94017,
    browser_language_code: 'en',
    created_on: new Date(1564348320000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 25641,
    user_id: 95127,
    browser_language_code: 'en-GB',
    created_on: new Date(1564362420000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 25752,
    user_id: 95571,
    browser_language_code: 'en',
    created_on: new Date(1564367640000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 25863,
    user_id: 96015,
    browser_language_code: 'en',
    created_on: new Date(1564374300000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 25974,
    user_id: 96126,
    browser_language_code: 'en',
    created_on: new Date(1564375980000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26085,
    user_id: 97014,
    browser_language_code: 'en',
    created_on: new Date(1564426980000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 26196,
    user_id: 97125,
    browser_language_code: 'en',
    created_on: new Date(1564427160000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 26307,
    user_id: 97347,
    browser_language_code: 'en',
    created_on: new Date(1564430400000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26418,
    user_id: 97791,
    browser_language_code: 'en',
    created_on: new Date(1564435140000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26529,
    user_id: 98013,
    browser_language_code: 'en',
    created_on: new Date(1564437600000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26640,
    user_id: 98235,
    browser_language_code: 'en',
    created_on: new Date(1564441140000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26751,
    user_id: 98790,
    browser_language_code: 'en',
    created_on: new Date(1564452000000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26862,
    user_id: 99123,
    browser_language_code: 'en',
    created_on: new Date(1564452840000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 26973,
    user_id: 99456,
    browser_language_code: 'en',
    created_on: new Date(1564465980000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 27084,
    user_id: 99567,
    browser_language_code: 'en',
    created_on: new Date(1564468980000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 27195,
    user_id: 99789,
    browser_language_code: 'en',
    created_on: new Date(1564491720000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 27306,
    user_id: 99900,
    browser_language_code: 'en',
    created_on: new Date(1564510620000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 27417,
    user_id: 100233,
    browser_language_code: 'en',
    created_on: new Date(1564596840000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 27528,
    user_id: 100899,
    browser_language_code: 'en',
    created_on: new Date(1564723200000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 27639,
    user_id: 101010,
    browser_language_code: 'en-GB',
    created_on: new Date(1564778340000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 27750,
    user_id: 101121,
    browser_language_code: 'en',
    created_on: new Date(1564782540000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 27861,
    user_id: 99234,
    browser_language_code: 'en',
    created_on: new Date(1564861500000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 27972,
    user_id: 101343,
    browser_language_code: 'en',
    created_on: new Date(1564900320000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 28083,
    user_id: 101565,
    browser_language_code: 'en',
    created_on: new Date(1564915200000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 28194,
    user_id: 102009,
    browser_language_code: 'en',
    created_on: new Date(1564927920000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 28305,
    user_id: 102342,
    browser_language_code: 'en',
    created_on: new Date(1564930380000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 28416,
    user_id: 102564,
    browser_language_code: 'en',
    created_on: new Date(1564931460000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 28527,
    user_id: 102675,
    browser_language_code: 'en',
    created_on: new Date(1564931640000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 28638,
    user_id: 102786,
    browser_language_code: 'en',
    created_on: new Date(1564932300000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 28749,
    user_id: 102897,
    browser_language_code: 'en',
    created_on: new Date(1564933440000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 28860,
    user_id: 103674,
    browser_language_code: 'en',
    created_on: new Date(1564938300000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 28971,
    user_id: 103785,
    browser_language_code: 'fr',
    created_on: new Date(1564939500000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 29082,
    user_id: 103896,
    browser_language_code: 'en',
    created_on: new Date(1564939920000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 29193,
    user_id: 104340,
    browser_language_code: 'en',
    created_on: new Date(1564942680000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 29304,
    user_id: 104784,
    browser_language_code: 'en',
    created_on: new Date(1564944540000),
    device_cat: 'Tablet',
  });
  await sqltestgoogleuser.create({
    id: 29415,
    user_id: 105339,
    browser_language_code: 'en-GB',
    created_on: new Date(1564948560000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 29526,
    user_id: 105561,
    browser_language_code: 'fr',
    created_on: new Date(1564949640000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 29637,
    user_id: 105672,
    browser_language_code: 'fr',
    created_on: new Date(1564949820000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 29748,
    user_id: 105783,
    browser_language_code: 'en',
    created_on: new Date(1564950000000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 29970,
    user_id: 106338,
    browser_language_code: 'en',
    created_on: new Date(1564956060000),
    device_cat: 'Mobile',
  });
  await sqltestgoogleuser.create({
    id: 30081,
    user_id: 106449,
    browser_language_code: 'en',
    created_on: new Date(1564956720000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 30192,
    user_id: 106782,
    browser_language_code: 'en',
    created_on: new Date(1564961100000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 30303,
    user_id: 107004,
    browser_language_code: 'en-GB',
    created_on: new Date(1564962360000),
    device_cat: 'Desktop',
  });
  await sqltestgoogleuser.create({
    id: 30414,
    user_id: 107226,
    browser_language_code: 'en',
    created_on: new Date(1564963140000),
    device_cat: 'Desktop',
  });

  await sqltestuser.create({
    user_id: 48063,
    is_activated: true,
    signed_up_on: new Date(1560469020000),
    last_login: new Date(1560469140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50616,
    is_activated: true,
    signed_up_on: new Date(1562321640000),
    last_login: new Date(1562321640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46065,
    is_activated: true,
    signed_up_on: new Date(1559633160000),
    last_login: new Date(1559633160000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52503,
    is_activated: true,
    signed_up_on: new Date(1562459340000),
    last_login: new Date(1562467980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55278,
    is_activated: true,
    signed_up_on: new Date(1562484120000),
    last_login: new Date(1562484420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50394,
    is_activated: true,
    signed_up_on: new Date(1562141400000),
    last_login: new Date(1562141460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53169,
    is_activated: true,
    signed_up_on: new Date(1562462280000),
    last_login: new Date(1562462340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77145,
    is_activated: true,
    signed_up_on: new Date(1564119780000),
    last_login: new Date(1564119780000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73482,
    is_activated: true,
    signed_up_on: new Date(1563618240000),
    last_login: new Date(1563618240000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46176,
    is_activated: true,
    signed_up_on: new Date(1559643180000),
    last_login: new Date(1559643180000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57498,
    is_activated: true,
    signed_up_on: new Date(1562549520000),
    last_login: new Date(1562551920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48174,
    is_activated: true,
    signed_up_on: new Date(1560554160000),
    last_login: new Date(1562640960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 55389,
    is_activated: true,
    signed_up_on: new Date(1562498100000),
    last_login: new Date(1562511600000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57720,
    is_activated: true,
    signed_up_on: new Date(1562556120000),
    last_login: new Date(1562559360000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53280,
    is_activated: true,
    signed_up_on: new Date(1562462700000),
    last_login: new Date(1562462700000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46287,
    is_activated: true,
    signed_up_on: new Date(1559687220000),
    last_login: new Date(1564529460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 89355,
    is_activated: true,
    signed_up_on: new Date(1564278360000),
    last_login: new Date(1564354680000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77256,
    is_activated: true,
    signed_up_on: new Date(1564119900000),
    last_login: new Date(1564119900000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48285,
    is_activated: true,
    signed_up_on: new Date(1560645600000),
    last_login: new Date(1560645720000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48396,
    is_activated: true,
    signed_up_on: new Date(1560654360000),
    last_login: new Date(1560654480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60162,
    is_activated: true,
    signed_up_on: new Date(1562607660000),
    last_login: new Date(1562607720000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46509,
    is_activated: true,
    signed_up_on: new Date(1559706660000),
    last_login: new Date(1563768000000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 82695,
    is_activated: true,
    signed_up_on: new Date(1564190880000),
    last_login: new Date(1564190880000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48507,
    is_activated: true,
    signed_up_on: new Date(1560659160000),
    last_login: new Date(1560659160000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46620,
    is_activated: true,
    signed_up_on: new Date(1559722980000),
    last_login: new Date(1559724480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48618,
    is_activated: true,
    signed_up_on: new Date(1560668700000),
    last_login: new Date(1560668700000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52614,
    is_activated: true,
    signed_up_on: new Date(1562459700000),
    last_login: new Date(1562459760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46731,
    is_activated: true,
    signed_up_on: new Date(1559825580000),
    last_login: new Date(1559825820000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46842,
    is_activated: true,
    signed_up_on: new Date(1559825640000),
    last_login: new Date(1559825640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60384,
    is_activated: true,
    signed_up_on: new Date(1562610180000),
    last_login: new Date(1562610180000),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99123,
    is_activated: true,
    signed_up_on: new Date(1564452840000),
    last_login: new Date(1564452840000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48840,
    is_activated: false,
    signed_up_on: new Date(1560704940000),
    last_login: new Date(-2209161600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 46953,
    is_activated: true,
    signed_up_on: new Date(1559972640000),
    last_login: new Date(1559972700000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65601,
    is_activated: true,
    signed_up_on: new Date(1562713740000),
    last_login: new Date(1562713740000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 44844,
    is_activated: true,
    signed_up_on: new Date(1559361480000),
    last_login: new Date(1559361540000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83916,
    is_activated: true,
    signed_up_on: new Date(1564201560000),
    last_login: new Date(1564201560000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50727,
    is_activated: true,
    signed_up_on: new Date(1562328000000),
    last_login: new Date(1562328600000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47064,
    is_activated: true,
    signed_up_on: new Date(1559974140000),
    last_login: new Date(1559974200000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 48951,
    is_activated: true,
    signed_up_on: new Date(1560713340000),
    last_login: new Date(1560716160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 44955,
    is_activated: true,
    signed_up_on: new Date(1559373120000),
    last_login: new Date(1559422440000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84027,
    is_activated: true,
    signed_up_on: new Date(1564201620000),
    last_login: new Date(1564201800000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53502,
    is_activated: true,
    signed_up_on: new Date(1562465100000),
    last_login: new Date(1562465160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59718,
    is_activated: true,
    signed_up_on: new Date(1562594820000),
    last_login: new Date(1562788980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62382,
    is_activated: true,
    signed_up_on: new Date(1562631900000),
    last_login: new Date(1562631960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60495,
    is_activated: true,
    signed_up_on: new Date(1562610480000),
    last_login: new Date(1562613960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52725,
    is_activated: true,
    signed_up_on: new Date(1562460120000),
    last_login: new Date(1562460900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 55722,
    is_activated: true,
    signed_up_on: new Date(1562511300000),
    last_login: new Date(1562511360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57831,
    is_activated: true,
    signed_up_on: new Date(1562558520000),
    last_login: new Date(1562559600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71928,
    is_activated: true,
    signed_up_on: new Date(1563215820000),
    last_login: new Date(1563215820000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47175,
    is_activated: true,
    signed_up_on: new Date(1560064140000),
    last_login: new Date(1560064140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49062,
    is_activated: true,
    signed_up_on: new Date(1560725160000),
    last_login: new Date(1560725160000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45066,
    is_activated: true,
    signed_up_on: new Date(1559375340000),
    last_login: new Date(1559375460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50838,
    is_activated: true,
    signed_up_on: new Date(1562365680000),
    last_login: new Date(1562365680000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68709,
    is_activated: true,
    signed_up_on: new Date(1562889960000),
    last_login: new Date(1562890140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62493,
    is_activated: true,
    signed_up_on: new Date(1562632800000),
    last_login: new Date(1562632980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65712,
    is_activated: false,
    signed_up_on: new Date(1562714940000),
    last_login: new Date(1562714940000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64158,
    is_activated: true,
    signed_up_on: new Date(1562656140000),
    last_login: new Date(1562656140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67377,
    is_activated: true,
    signed_up_on: new Date(1562792160000),
    last_login: new Date(1562792280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70374,
    is_activated: true,
    signed_up_on: new Date(1563044760000),
    last_login: new Date(1563044880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53613,
    is_activated: false,
    signed_up_on: new Date(1562465220000),
    last_login: new Date(1562465220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76812,
    is_activated: true,
    signed_up_on: new Date(1564117440000),
    last_login: new Date(1564326240000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59496,
    is_activated: true,
    signed_up_on: new Date(1562589600000),
    last_login: new Date(1562589600000),
    sign_up_source: 'linkedin',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55611,
    is_activated: true,
    signed_up_on: new Date(1562509860000),
    last_login: new Date(1562512620000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52836,
    is_activated: true,
    signed_up_on: new Date(1562460780000),
    last_login: new Date(1562460840000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57942,
    is_activated: true,
    signed_up_on: new Date(1562561460000),
    last_login: new Date(1562561460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75369,
    is_activated: true,
    signed_up_on: new Date(1563792900000),
    last_login: new Date(1563792960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73593,
    is_activated: true,
    signed_up_on: new Date(1563629880000),
    last_login: new Date(1563629940000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60606,
    is_activated: true,
    signed_up_on: new Date(1562612340000),
    last_login: new Date(1562612400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77589,
    is_activated: true,
    signed_up_on: new Date(1564122240000),
    last_login: new Date(1564182300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89133,
    is_activated: true,
    signed_up_on: new Date(1564277400000),
    last_login: new Date(1564277400000),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55833,
    is_activated: true,
    signed_up_on: new Date(1562514120000),
    last_login: new Date(1562514180000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57609,
    is_activated: true,
    signed_up_on: new Date(1562554320000),
    last_login: new Date(1562554320000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47286,
    is_activated: true,
    signed_up_on: new Date(1560129900000),
    last_login: new Date(1560129960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 58053,
    is_activated: true,
    signed_up_on: new Date(1562561640000),
    last_login: new Date(1562561640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45177,
    is_activated: true,
    signed_up_on: new Date(1559382660000),
    last_login: new Date(1559382720000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64047,
    is_activated: true,
    signed_up_on: new Date(1562653800000),
    last_login: new Date(1562656500000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52947,
    is_activated: false,
    signed_up_on: new Date(1562461080000),
    last_login: new Date(1562461080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 53724,
    is_activated: true,
    signed_up_on: new Date(1562465340000),
    last_login: new Date(1562465340000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60717,
    is_activated: true,
    signed_up_on: new Date(1562612460000),
    last_login: new Date(1562612460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75258,
    is_activated: true,
    signed_up_on: new Date(1563790440000),
    last_login: new Date(1563790440000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50949,
    is_activated: true,
    signed_up_on: new Date(1562370960000),
    last_login: new Date(1562370960000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67488,
    is_activated: true,
    signed_up_on: new Date(1562798220000),
    last_login: new Date(1562798340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59829,
    is_activated: true,
    signed_up_on: new Date(1562598960000),
    last_login: new Date(1562599020000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89688,
    is_activated: true,
    signed_up_on: new Date(1564281840000),
    last_login: new Date(1564281900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90687,
    is_activated: true,
    signed_up_on: new Date(1564310640000),
    last_login: new Date(1564310760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68820,
    is_activated: true,
    signed_up_on: new Date(1562890320000),
    last_login: new Date(1562890380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70485,
    is_activated: false,
    signed_up_on: new Date(1563066900000),
    last_login: new Date(1563066900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 72039,
    is_activated: true,
    signed_up_on: new Date(1563261000000),
    last_login: new Date(1563276240000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73704,
    is_activated: true,
    signed_up_on: new Date(1563670200000),
    last_login: new Date(1563670260000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72150,
    is_activated: false,
    signed_up_on: new Date(1563332340000),
    last_login: new Date(-2209161600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 55944,
    is_activated: true,
    signed_up_on: new Date(1562515920000),
    last_login: new Date(1562515920000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59940,
    is_activated: true,
    signed_up_on: new Date(1562599080000),
    last_login: new Date(1562599080000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64269,
    is_activated: true,
    signed_up_on: new Date(1562664480000),
    last_login: new Date(1562664480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49173,
    is_activated: true,
    signed_up_on: new Date(1561003680000),
    last_login: new Date(1561003740000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65823,
    is_activated: false,
    signed_up_on: new Date(1562721480000),
    last_login: new Date(1562721480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 47397,
    is_activated: true,
    signed_up_on: new Date(1560130860000),
    last_login: new Date(1560130860000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60828,
    is_activated: true,
    signed_up_on: new Date(1562613240000),
    last_login: new Date(1562620980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53058,
    is_activated: true,
    signed_up_on: new Date(1562461740000),
    last_login: new Date(1562461800000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53391,
    is_activated: true,
    signed_up_on: new Date(1562464980000),
    last_login: new Date(1562516760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58164,
    is_activated: true,
    signed_up_on: new Date(1562562240000),
    last_login: new Date(1562562240000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51060,
    is_activated: true,
    signed_up_on: new Date(1562371140000),
    last_login: new Date(1562371140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67599,
    is_activated: true,
    signed_up_on: new Date(1562799180000),
    last_login: new Date(1562799180000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62604,
    is_activated: true,
    signed_up_on: new Date(1562634480000),
    last_login: new Date(1562634480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84360,
    is_activated: true,
    signed_up_on: new Date(1564211040000),
    last_login: new Date(1564211280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68931,
    is_activated: true,
    signed_up_on: new Date(1562913180000),
    last_login: new Date(1562913180000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75480,
    is_activated: true,
    signed_up_on: new Date(1563802140000),
    last_login: new Date(1563802260000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73815,
    is_activated: true,
    signed_up_on: new Date(1563679800000),
    last_login: new Date(1563679860000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47508,
    is_activated: true,
    signed_up_on: new Date(1560150960000),
    last_login: new Date(1560150960000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49284,
    is_activated: true,
    signed_up_on: new Date(1561180020000),
    last_login: new Date(1561199700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 60939,
    is_activated: true,
    signed_up_on: new Date(1562614860000),
    last_login: new Date(1562614860000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51171,
    is_activated: true,
    signed_up_on: new Date(1562375340000),
    last_login: new Date(1562375460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62715,
    is_activated: true,
    signed_up_on: new Date(1562637780000),
    last_login: new Date(1562637780000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69042,
    is_activated: true,
    signed_up_on: new Date(1562959860000),
    last_login: new Date(1562962920000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58275,
    is_activated: true,
    signed_up_on: new Date(1562562600000),
    last_login: new Date(1562562600000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53835,
    is_activated: true,
    signed_up_on: new Date(1562465760000),
    last_login: new Date(1562465760000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56055,
    is_activated: true,
    signed_up_on: new Date(1562516940000),
    last_login: new Date(1562517300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79032,
    is_activated: true,
    signed_up_on: new Date(1564157400000),
    last_login: new Date(1564157400000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72261,
    is_activated: true,
    signed_up_on: new Date(1563332400000),
    last_login: new Date(1563332520000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 67710,
    is_activated: true,
    signed_up_on: new Date(1562803020000),
    last_login: new Date(1562803080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65934,
    is_activated: true,
    signed_up_on: new Date(1562722860000),
    last_login: new Date(1562722920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75591,
    is_activated: true,
    signed_up_on: new Date(1563808020000),
    last_login: new Date(1563808020000),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91575,
    is_activated: true,
    signed_up_on: new Date(1564332300000),
    last_login: new Date(1564332300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73926,
    is_activated: true,
    signed_up_on: new Date(1563684000000),
    last_login: new Date(1563684000000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77034,
    is_activated: true,
    signed_up_on: new Date(1564119360000),
    last_login: new Date(1564119420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97347,
    is_activated: true,
    signed_up_on: new Date(1564430400000),
    last_login: new Date(1564430400000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47619,
    is_activated: true,
    signed_up_on: new Date(1560154920000),
    last_login: new Date(1560154980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45510,
    is_activated: true,
    signed_up_on: new Date(1559464200000),
    last_login: new Date(1559464200000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61050,
    is_activated: true,
    signed_up_on: new Date(1562615280000),
    last_login: new Date(1562615340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78588,
    is_activated: true,
    signed_up_on: new Date(1564152540000),
    last_login: new Date(1564152540000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56166,
    is_activated: true,
    signed_up_on: new Date(1562523060000),
    last_login: new Date(1562523060000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60051,
    is_activated: true,
    signed_up_on: new Date(1562600460000),
    last_login: new Date(1562694360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69153,
    is_activated: true,
    signed_up_on: new Date(1562959920000),
    last_login: new Date(1562959980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 100233,
    is_activated: true,
    signed_up_on: new Date(1564596840000),
    last_login: new Date(1564596840000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66045,
    is_activated: true,
    signed_up_on: new Date(1562729940000),
    last_login: new Date(1564604340000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49395,
    is_activated: true,
    signed_up_on: new Date(1561204920000),
    last_login: new Date(1561378560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 58386,
    is_activated: true,
    signed_up_on: new Date(1562563980000),
    last_login: new Date(1562564040000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 53946,
    is_activated: true,
    signed_up_on: new Date(1562466060000),
    last_login: new Date(1562466060000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89466,
    is_activated: true,
    signed_up_on: new Date(1564281120000),
    last_login: new Date(1564281120000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62826,
    is_activated: true,
    signed_up_on: new Date(1562638020000),
    last_login: new Date(1562638020000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51282,
    is_activated: true,
    signed_up_on: new Date(1562380980000),
    last_login: new Date(1562380980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70818,
    is_activated: true,
    signed_up_on: new Date(1563096300000),
    last_login: new Date(1563096360000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67821,
    is_activated: true,
    signed_up_on: new Date(1562803320000),
    last_login: new Date(1562803440000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74037,
    is_activated: true,
    signed_up_on: new Date(1563706380000),
    last_login: new Date(1563706380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75702,
    is_activated: true,
    signed_up_on: new Date(1563819000000),
    last_login: new Date(1563819000000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75813,
    is_activated: true,
    signed_up_on: new Date(1563823380000),
    last_login: new Date(1563824340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47730,
    is_activated: true,
    signed_up_on: new Date(1560165660000),
    last_login: new Date(1560170340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51393,
    is_activated: true,
    signed_up_on: new Date(1562387940000),
    last_login: new Date(1562388000000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59607,
    is_activated: true,
    signed_up_on: new Date(1562589840000),
    last_login: new Date(1562589900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58497,
    is_activated: true,
    signed_up_on: new Date(1562565180000),
    last_login: new Date(1562565360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49506,
    is_activated: true,
    signed_up_on: new Date(1561374300000),
    last_login: new Date(1561374420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54057,
    is_activated: true,
    signed_up_on: new Date(1562467560000),
    last_login: new Date(1562467560000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67266,
    is_activated: false,
    signed_up_on: new Date(1562788740000),
    last_login: new Date(1562788980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70929,
    is_activated: true,
    signed_up_on: new Date(1563119100000),
    last_login: new Date(1563119100000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64491,
    is_activated: true,
    signed_up_on: new Date(1562690580000),
    last_login: new Date(1562693700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66156,
    is_activated: true,
    signed_up_on: new Date(1562733180000),
    last_login: new Date(1562733480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67932,
    is_activated: true,
    signed_up_on: new Date(1562805540000),
    last_login: new Date(1562805540000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62937,
    is_activated: true,
    signed_up_on: new Date(1562639100000),
    last_login: new Date(1562639100000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72483,
    is_activated: true,
    signed_up_on: new Date(1563348540000),
    last_login: new Date(1563348540000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74148,
    is_activated: true,
    signed_up_on: new Date(1563712020000),
    last_login: new Date(1563712080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56277,
    is_activated: true,
    signed_up_on: new Date(1562524260000),
    last_login: new Date(1562524260000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77367,
    is_activated: true,
    signed_up_on: new Date(1564120560000),
    last_login: new Date(1564163880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77700,
    is_activated: true,
    signed_up_on: new Date(1564125300000),
    last_login: new Date(1564172760000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80919,
    is_activated: true,
    signed_up_on: new Date(1564170960000),
    last_login: new Date(1564171620000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45732,
    is_activated: true,
    signed_up_on: new Date(1559550540000),
    last_login: new Date(1559550540000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58608,
    is_activated: true,
    signed_up_on: new Date(1562566140000),
    last_login: new Date(1562566140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61272,
    is_activated: true,
    signed_up_on: new Date(1562616240000),
    last_login: new Date(1562618280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47841,
    is_activated: true,
    signed_up_on: new Date(1560221100000),
    last_login: new Date(1560221100000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51504,
    is_activated: true,
    signed_up_on: new Date(1562410140000),
    last_login: new Date(1562410140000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66267,
    is_activated: true,
    signed_up_on: new Date(1562737440000),
    last_login: new Date(1562802420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49617,
    is_activated: true,
    signed_up_on: new Date(1561463100000),
    last_login: new Date(1561463160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 64602,
    is_activated: true,
    signed_up_on: new Date(1562691540000),
    last_login: new Date(1562691660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56388,
    is_activated: true,
    signed_up_on: new Date(1562526300000),
    last_login: new Date(1562526300000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72594,
    is_activated: true,
    signed_up_on: new Date(1563352320000),
    last_login: new Date(1563352320000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63048,
    is_activated: true,
    signed_up_on: new Date(1562639340000),
    last_login: new Date(1562639340000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67155,
    is_activated: true,
    signed_up_on: new Date(1562787900000),
    last_login: new Date(1562787900000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54168,
    is_activated: true,
    signed_up_on: new Date(1562468340000),
    last_login: new Date(1562468880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71040,
    is_activated: true,
    signed_up_on: new Date(1563121320000),
    last_login: new Date(1563121380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79143,
    is_activated: true,
    signed_up_on: new Date(1564160400000),
    last_login: new Date(1564160460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79254,
    is_activated: true,
    signed_up_on: new Date(1564160460000),
    last_login: new Date(1564160460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69264,
    is_activated: false,
    signed_up_on: new Date(1562967840000),
    last_login: new Date(1562967840000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86469,
    is_activated: true,
    signed_up_on: new Date(1564246860000),
    last_login: new Date(1564247100000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74259,
    is_activated: true,
    signed_up_on: new Date(1563723060000),
    last_login: new Date(1563723180000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75924,
    is_activated: false,
    signed_up_on: new Date(1563836700000),
    last_login: new Date(1563836700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 47952,
    is_activated: true,
    signed_up_on: new Date(1560307980000),
    last_login: new Date(1560308040000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49728,
    is_activated: true,
    signed_up_on: new Date(1561480140000),
    last_login: new Date(1561480140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61383,
    is_activated: true,
    signed_up_on: new Date(1562616420000),
    last_login: new Date(1562616420000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45843,
    is_activated: true,
    signed_up_on: new Date(1559624760000),
    last_login: new Date(1559624820000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54279,
    is_activated: true,
    signed_up_on: new Date(1562468460000),
    last_login: new Date(1562468460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63159,
    is_activated: true,
    signed_up_on: new Date(1562639640000),
    last_login: new Date(1562639640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66378,
    is_activated: true,
    signed_up_on: new Date(1562772240000),
    last_login: new Date(1562772480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51615,
    is_activated: true,
    signed_up_on: new Date(1562416500000),
    last_login: new Date(1562416560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69375,
    is_activated: true,
    signed_up_on: new Date(1562978880000),
    last_login: new Date(1562978880000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81030,
    is_activated: true,
    signed_up_on: new Date(1564171860000),
    last_login: new Date(1564171860000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64713,
    is_activated: true,
    signed_up_on: new Date(1562693160000),
    last_login: new Date(1562693220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71151,
    is_activated: true,
    signed_up_on: new Date(1563121980000),
    last_login: new Date(1563121980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58719,
    is_activated: true,
    signed_up_on: new Date(1562567100000),
    last_login: new Date(1562567160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72705,
    is_activated: true,
    signed_up_on: new Date(1563358800000),
    last_login: new Date(1563358800000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56499,
    is_activated: true,
    signed_up_on: new Date(1562527620000),
    last_login: new Date(1562527620000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77811,
    is_activated: true,
    signed_up_on: new Date(1564126500000),
    last_login: new Date(1564126560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76035,
    is_activated: true,
    signed_up_on: new Date(1563852240000),
    last_login: new Date(1563852240000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74370,
    is_activated: false,
    signed_up_on: new Date(1563723600000),
    last_login: new Date(1563723600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78921,
    is_activated: true,
    signed_up_on: new Date(1564156500000),
    last_login: new Date(1564156560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80142,
    is_activated: true,
    signed_up_on: new Date(1564164900000),
    last_login: new Date(1564164960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74481,
    is_activated: true,
    signed_up_on: new Date(1563745020000),
    last_login: new Date(1563745020000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56610,
    is_activated: true,
    signed_up_on: new Date(1562530740000),
    last_login: new Date(1562530800000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49839,
    is_activated: false,
    signed_up_on: new Date(1561614480000),
    last_login: new Date(1561614480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45954,
    is_activated: false,
    signed_up_on: new Date(1559628960000),
    last_login: new Date(1559628960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64824,
    is_activated: true,
    signed_up_on: new Date(1562694540000),
    last_login: new Date(1562694540000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54390,
    is_activated: true,
    signed_up_on: new Date(1562469480000),
    last_login: new Date(1562469540000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66489,
    is_activated: true,
    signed_up_on: new Date(1562775540000),
    last_login: new Date(1562775600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51726,
    is_activated: true,
    signed_up_on: new Date(1562419500000),
    last_login: new Date(1562419560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68043,
    is_activated: true,
    signed_up_on: new Date(1562840520000),
    last_login: new Date(1562840520000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76146,
    is_activated: true,
    signed_up_on: new Date(1563857100000),
    last_login: new Date(1563857100000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77922,
    is_activated: true,
    signed_up_on: new Date(1564131240000),
    last_login: new Date(1564131300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84471,
    is_activated: true,
    signed_up_on: new Date(1564214700000),
    last_login: new Date(1564214700000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63270,
    is_activated: true,
    signed_up_on: new Date(1562641500000),
    last_login: new Date(1562641620000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72816,
    is_activated: true,
    signed_up_on: new Date(1563360360000),
    last_login: new Date(1563360420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71262,
    is_activated: true,
    signed_up_on: new Date(1563126960000),
    last_login: new Date(1563127080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79365,
    is_activated: true,
    signed_up_on: new Date(1564161240000),
    last_login: new Date(1564161420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61494,
    is_activated: true,
    signed_up_on: new Date(1562617680000),
    last_login: new Date(1562617680000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54501,
    is_activated: true,
    signed_up_on: new Date(1562470440000),
    last_login: new Date(1562471640000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61605,
    is_activated: true,
    signed_up_on: new Date(1562617860000),
    last_login: new Date(1562617860000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71373,
    is_activated: true,
    signed_up_on: new Date(1563129480000),
    last_login: new Date(1563129480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 49950,
    is_activated: true,
    signed_up_on: new Date(1561765260000),
    last_login: new Date(1561765380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 58830,
    is_activated: true,
    signed_up_on: new Date(1562568480000),
    last_login: new Date(1562744520000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69597,
    is_activated: true,
    signed_up_on: new Date(1562990160000),
    last_login: new Date(1562990160000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66600,
    is_activated: true,
    signed_up_on: new Date(1562777460000),
    last_login: new Date(1562777520000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63381,
    is_activated: true,
    signed_up_on: new Date(1562642280000),
    last_login: new Date(1562642280000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64935,
    is_activated: true,
    signed_up_on: new Date(1562699040000),
    last_login: new Date(1562699100000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81696,
    is_activated: true,
    signed_up_on: new Date(1564176660000),
    last_login: new Date(1564177380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72927,
    is_activated: true,
    signed_up_on: new Date(1563362460000),
    last_login: new Date(1563362460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78033,
    is_activated: true,
    signed_up_on: new Date(1564134120000),
    last_login: new Date(1564134120000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51837,
    is_activated: true,
    signed_up_on: new Date(1562429700000),
    last_login: new Date(1562429760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74592,
    is_activated: true,
    signed_up_on: new Date(1563749160000),
    last_login: new Date(1563749220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80253,
    is_activated: true,
    signed_up_on: new Date(1564165320000),
    last_login: new Date(1564165380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76257,
    is_activated: true,
    signed_up_on: new Date(1563871020000),
    last_login: new Date(1563871020000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82140,
    is_activated: true,
    signed_up_on: new Date(1564181640000),
    last_login: new Date(1564181760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56721,
    is_activated: true,
    signed_up_on: new Date(1562531460000),
    last_login: new Date(1564158960000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79476,
    is_activated: true,
    signed_up_on: new Date(1564161300000),
    last_login: new Date(1564161360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 58941,
    is_activated: true,
    signed_up_on: new Date(1562570220000),
    last_login: new Date(1562570220000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50061,
    is_activated: true,
    signed_up_on: new Date(1561815480000),
    last_login: new Date(1561815600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 61716,
    is_activated: true,
    signed_up_on: new Date(1562623740000),
    last_login: new Date(1562623740000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78144,
    is_activated: true,
    signed_up_on: new Date(1564135140000),
    last_login: new Date(1564135140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66711,
    is_activated: true,
    signed_up_on: new Date(1562780460000),
    last_login: new Date(1562780520000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69708,
    is_activated: true,
    signed_up_on: new Date(1562995320000),
    last_login: new Date(1562995320000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 77478,
    is_activated: true,
    signed_up_on: new Date(1564121520000),
    last_login: new Date(1564121520000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76368,
    is_activated: true,
    signed_up_on: new Date(1563901020000),
    last_login: new Date(1563901080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65046,
    is_activated: true,
    signed_up_on: new Date(1562699280000),
    last_login: new Date(1562785740000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54612,
    is_activated: true,
    signed_up_on: new Date(1562471460000),
    last_login: new Date(1562602380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56832,
    is_activated: false,
    signed_up_on: new Date(1562532900000),
    last_login: new Date(1562532900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68154,
    is_activated: true,
    signed_up_on: new Date(1562855520000),
    last_login: new Date(1562855580000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71484,
    is_activated: true,
    signed_up_on: new Date(1563142440000),
    last_login: new Date(1563142500000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63492,
    is_activated: true,
    signed_up_on: new Date(1562643420000),
    last_login: new Date(1562643480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80364,
    is_activated: true,
    signed_up_on: new Date(1564165560000),
    last_login: new Date(1564165620000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80031,
    is_activated: true,
    signed_up_on: new Date(1564163100000),
    last_login: new Date(1564163160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82251,
    is_activated: false,
    signed_up_on: new Date(1564182960000),
    last_login: new Date(1564190280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81252,
    is_activated: true,
    signed_up_on: new Date(1564173540000),
    last_login: new Date(1564174440000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74703,
    is_activated: true,
    signed_up_on: new Date(1563773640000),
    last_login: new Date(1563773700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81807,
    is_activated: true,
    signed_up_on: new Date(1564178820000),
    last_login: new Date(1564200660000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79587,
    is_activated: true,
    signed_up_on: new Date(1564162020000),
    last_login: new Date(1564363620000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61827,
    is_activated: true,
    signed_up_on: new Date(1562626020000),
    last_login: new Date(1562626080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63603,
    is_activated: true,
    signed_up_on: new Date(1562644920000),
    last_login: new Date(1562644980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65157,
    is_activated: true,
    signed_up_on: new Date(1562702220000),
    last_login: new Date(1562702220000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50172,
    is_activated: true,
    signed_up_on: new Date(1561820640000),
    last_login: new Date(1561820640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 56943,
    is_activated: true,
    signed_up_on: new Date(1562533080000),
    last_login: new Date(1562546700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89910,
    is_activated: true,
    signed_up_on: new Date(1564284720000),
    last_login: new Date(1564284780000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59052,
    is_activated: false,
    signed_up_on: new Date(1562571960000),
    last_login: new Date(1562571960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66822,
    is_activated: true,
    signed_up_on: new Date(1562781300000),
    last_login: new Date(1562781360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54723,
    is_activated: true,
    signed_up_on: new Date(1562472900000),
    last_login: new Date(1562472900000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73038,
    is_activated: true,
    signed_up_on: new Date(1563416640000),
    last_login: new Date(1563416760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 51948,
    is_activated: true,
    signed_up_on: new Date(1562438400000),
    last_login: new Date(1562438460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78255,
    is_activated: true,
    signed_up_on: new Date(1564143540000),
    last_login: new Date(1564143600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81363,
    is_activated: true,
    signed_up_on: new Date(1564173840000),
    last_login: new Date(1564173840000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87468,
    is_activated: true,
    signed_up_on: new Date(1564255800000),
    last_login: new Date(1564255920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69819,
    is_activated: true,
    signed_up_on: new Date(1562995740000),
    last_login: new Date(1562995920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79698,
    is_activated: true,
    signed_up_on: new Date(1564162080000),
    last_login: new Date(1564162140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74814,
    is_activated: true,
    signed_up_on: new Date(1563776520000),
    last_login: new Date(1563776700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80475,
    is_activated: true,
    signed_up_on: new Date(1564168740000),
    last_login: new Date(1564169760000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81918,
    is_activated: true,
    signed_up_on: new Date(1564179480000),
    last_login: new Date(1564179480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50283,
    is_activated: true,
    signed_up_on: new Date(1562082300000),
    last_login: new Date(1562082300000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59163,
    is_activated: true,
    signed_up_on: new Date(1562572320000),
    last_login: new Date(1562572320000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52059,
    is_activated: true,
    signed_up_on: new Date(1562450880000),
    last_login: new Date(1562450940000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78366,
    is_activated: true,
    signed_up_on: new Date(1564148340000),
    last_login: new Date(1564148400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61938,
    is_activated: true,
    signed_up_on: new Date(1562626260000),
    last_login: new Date(1562626320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65268,
    is_activated: true,
    signed_up_on: new Date(1562705040000),
    last_login: new Date(1562705040000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 66933,
    is_activated: true,
    signed_up_on: new Date(1562781540000),
    last_login: new Date(1562781540000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 60273,
    is_activated: true,
    signed_up_on: new Date(1562608500000),
    last_login: new Date(1562608500000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57054,
    is_activated: true,
    signed_up_on: new Date(1562533200000),
    last_login: new Date(1562533200000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85581,
    is_activated: true,
    signed_up_on: new Date(1564238760000),
    last_login: new Date(1564238820000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79809,
    is_activated: true,
    signed_up_on: new Date(1564162680000),
    last_login: new Date(1564168320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80586,
    is_activated: true,
    signed_up_on: new Date(1564169100000),
    last_login: new Date(1564169160000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68376,
    is_activated: true,
    signed_up_on: new Date(1562878980000),
    last_login: new Date(1562879100000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54834,
    is_activated: true,
    signed_up_on: new Date(1562474220000),
    last_login: new Date(1562474220000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81474,
    is_activated: true,
    signed_up_on: new Date(1564175160000),
    last_login: new Date(1564175280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82029,
    is_activated: true,
    signed_up_on: new Date(1564180980000),
    last_login: new Date(1564180980000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73149,
    is_activated: true,
    signed_up_on: new Date(1563451440000),
    last_login: new Date(1563451440000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82362,
    is_activated: true,
    signed_up_on: new Date(1564186320000),
    last_login: new Date(1564186380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 69930,
    is_activated: true,
    signed_up_on: new Date(1562997720000),
    last_login: new Date(1562997840000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71706,
    is_activated: true,
    signed_up_on: new Date(1563156240000),
    last_login: new Date(1563156240000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 74925,
    is_activated: true,
    signed_up_on: new Date(1563781500000),
    last_login: new Date(1563781560000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78477,
    is_activated: true,
    signed_up_on: new Date(1564151700000),
    last_login: new Date(1564151700000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52170,
    is_activated: true,
    signed_up_on: new Date(1562455380000),
    last_login: new Date(1562455380000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 54945,
    is_activated: true,
    signed_up_on: new Date(1562476560000),
    last_login: new Date(1562476620000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65379,
    is_activated: true,
    signed_up_on: new Date(1562707020000),
    last_login: new Date(1562707020000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62049,
    is_activated: true,
    signed_up_on: new Date(1562627280000),
    last_login: new Date(1562641800000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57165,
    is_activated: true,
    signed_up_on: new Date(1562535660000),
    last_login: new Date(1562535720000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70041,
    is_activated: true,
    signed_up_on: new Date(1562997840000),
    last_login: new Date(1562997840000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68487,
    is_activated: true,
    signed_up_on: new Date(1562882700000),
    last_login: new Date(1562882880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76701,
    is_activated: true,
    signed_up_on: new Date(1564116960000),
    last_login: new Date(1564375860000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80697,
    is_activated: true,
    signed_up_on: new Date(1564169700000),
    last_login: new Date(1564169820000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73260,
    is_activated: true,
    signed_up_on: new Date(1563610440000),
    last_login: new Date(1563610440000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 71817,
    is_activated: true,
    signed_up_on: new Date(1563157620000),
    last_login: new Date(1563157620000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63714,
    is_activated: true,
    signed_up_on: new Date(1562648340000),
    last_login: new Date(1562648400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 67044,
    is_activated: true,
    signed_up_on: new Date(1562783640000),
    last_login: new Date(1562783700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75036,
    is_activated: true,
    signed_up_on: new Date(1563782160000),
    last_login: new Date(1563782220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 79920,
    is_activated: true,
    signed_up_on: new Date(1564163040000),
    last_login: new Date(1564317000000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 59274,
    is_activated: true,
    signed_up_on: new Date(1562580540000),
    last_login: new Date(1562580540000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81585,
    is_activated: true,
    signed_up_on: new Date(1564176600000),
    last_login: new Date(1564176840000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 80808,
    is_activated: true,
    signed_up_on: new Date(1564170180000),
    last_login: new Date(1564187160000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82584,
    is_activated: true,
    signed_up_on: new Date(1564190520000),
    last_login: new Date(1564226220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82473,
    is_activated: true,
    signed_up_on: new Date(1564189200000),
    last_login: new Date(1564189260000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57276,
    is_activated: true,
    signed_up_on: new Date(1562537640000),
    last_login: new Date(1562537700000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62160,
    is_activated: true,
    signed_up_on: new Date(1562629440000),
    last_login: new Date(1562629440000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63825,
    is_activated: true,
    signed_up_on: new Date(1562649660000),
    last_login: new Date(1562649660000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52281,
    is_activated: false,
    signed_up_on: new Date(1562456340000),
    last_login: new Date(1562456340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 59385,
    is_activated: true,
    signed_up_on: new Date(1562586060000),
    last_login: new Date(1562586120000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 50505,
    is_activated: true,
    signed_up_on: new Date(1562306340000),
    last_login: new Date(1562306340000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 62271,
    is_activated: true,
    signed_up_on: new Date(1562629440000),
    last_login: new Date(1562629440000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 63936,
    is_activated: true,
    signed_up_on: new Date(1562649660000),
    last_login: new Date(1562649660000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 65490,
    is_activated: true,
    signed_up_on: new Date(1562711100000),
    last_login: new Date(1562711220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55167,
    is_activated: true,
    signed_up_on: new Date(1562482500000),
    last_login: new Date(1562482500000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 52392,
    is_activated: true,
    signed_up_on: new Date(1562458320000),
    last_login: new Date(1562458320000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55500,
    is_activated: true,
    signed_up_on: new Date(1562508060000),
    last_login: new Date(1562508300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70263,
    is_activated: true,
    signed_up_on: new Date(1563036900000),
    last_login: new Date(1563036900000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 57387,
    is_activated: true,
    signed_up_on: new Date(1562543760000),
    last_login: new Date(1562543820000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70152,
    is_activated: true,
    signed_up_on: new Date(1563004260000),
    last_login: new Date(1563004320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68598,
    is_activated: true,
    signed_up_on: new Date(1562884620000),
    last_login: new Date(1562884680000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 75147,
    is_activated: true,
    signed_up_on: new Date(1563785220000),
    last_login: new Date(1563787980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 73371,
    is_activated: true,
    signed_up_on: new Date(1563614520000),
    last_login: new Date(1563614580000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 55056,
    is_activated: true,
    signed_up_on: new Date(1562477460000),
    last_login: new Date(1562477580000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91686,
    is_activated: true,
    signed_up_on: new Date(1564332600000),
    last_login: new Date(1564332660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86580,
    is_activated: true,
    signed_up_on: new Date(1564248900000),
    last_login: new Date(1564683000000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90909,
    is_activated: true,
    signed_up_on: new Date(1564324920000),
    last_login: new Date(1564324980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 85803,
    is_activated: true,
    signed_up_on: new Date(1564239600000),
    last_login: new Date(1564239960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94572,
    is_activated: true,
    signed_up_on: new Date(1564357020000),
    last_login: new Date(1564357080000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95460,
    is_activated: true,
    signed_up_on: new Date(1564367160000),
    last_login: new Date(1564367220000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84582,
    is_activated: true,
    signed_up_on: new Date(1564225740000),
    last_login: new Date(1564225740000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93018,
    is_activated: true,
    signed_up_on: new Date(1564342740000),
    last_login: new Date(1564368360000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87579,
    is_activated: true,
    signed_up_on: new Date(1564256280000),
    last_login: new Date(1564256280000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99234,
    is_activated: true,
    signed_up_on: new Date(1564455420000),
    last_login: new Date(1564861500000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82806,
    is_activated: false,
    signed_up_on: new Date(1564193400000),
    last_login: new Date(1564193400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 82917,
    is_activated: true,
    signed_up_on: new Date(1564193460000),
    last_login: new Date(1564193460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 72372,
    is_activated: true,
    signed_up_on: new Date(1563336600000),
    last_login: new Date(1564446600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 90021,
    is_activated: true,
    signed_up_on: new Date(1564285140000),
    last_login: new Date(1564285200000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97458,
    is_activated: true,
    signed_up_on: new Date(1564432140000),
    last_login: new Date(1564432140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98346,
    is_activated: true,
    signed_up_on: new Date(1564447620000),
    last_login: new Date(1564447740000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99345,
    is_activated: true,
    signed_up_on: new Date(1564465920000),
    last_login: new Date(1564465920000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 100344,
    is_activated: true,
    signed_up_on: new Date(1564603020000),
    last_login: new Date(1564603320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96459,
    is_activated: true,
    signed_up_on: new Date(1564402920000),
    last_login: new Date(1564402980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91797,
    is_activated: true,
    signed_up_on: new Date(1564333560000),
    last_login: new Date(1564442400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88467,
    is_activated: true,
    signed_up_on: new Date(1564264020000),
    last_login: new Date(1564264080000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85914,
    is_activated: true,
    signed_up_on: new Date(1564239960000),
    last_login: new Date(1564240020000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94683,
    is_activated: true,
    signed_up_on: new Date(1564358400000),
    last_login: new Date(1564358460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83028,
    is_activated: true,
    signed_up_on: new Date(1564194720000),
    last_login: new Date(1564306140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95571,
    is_activated: true,
    signed_up_on: new Date(1564367640000),
    last_login: new Date(1564367640000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92907,
    is_activated: true,
    signed_up_on: new Date(1564342740000),
    last_login: new Date(1564365600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87690,
    is_activated: true,
    signed_up_on: new Date(1564256580000),
    last_login: new Date(1564256640000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89577,
    is_activated: true,
    signed_up_on: new Date(1564281300000),
    last_login: new Date(1564281300000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93795,
    is_activated: true,
    signed_up_on: new Date(1564346820000),
    last_login: new Date(1564347000000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91020,
    is_activated: true,
    signed_up_on: new Date(1564326480000),
    last_login: new Date(1564326480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89244,
    is_activated: true,
    signed_up_on: new Date(1564277760000),
    last_login: new Date(1564277820000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92019,
    is_activated: true,
    signed_up_on: new Date(1564338180000),
    last_login: new Date(1564338240000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97569,
    is_activated: true,
    signed_up_on: new Date(1564432200000),
    last_login: new Date(1564432260000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99456,
    is_activated: true,
    signed_up_on: new Date(1564465980000),
    last_login: new Date(1564465980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 100455,
    is_activated: true,
    signed_up_on: new Date(1564605960000),
    last_login: new Date(1564606020000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 70707,
    is_activated: true,
    signed_up_on: new Date(1563083580000),
    last_login: new Date(1563083580000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 46398,
    is_activated: true,
    signed_up_on: new Date(1559700780000),
    last_login: new Date(1565044020000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 71595,
    is_activated: true,
    signed_up_on: new Date(1563155580000),
    last_login: new Date(1564448880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95682,
    is_activated: true,
    signed_up_on: new Date(1564371600000),
    last_login: new Date(1564371660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93906,
    is_activated: true,
    signed_up_on: new Date(1564347660000),
    last_login: new Date(1564347660000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84693,
    is_activated: false,
    signed_up_on: new Date(1564232880000),
    last_login: new Date(1564233120000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91908,
    is_activated: true,
    signed_up_on: new Date(1564333800000),
    last_login: new Date(1564333920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94794,
    is_activated: true,
    signed_up_on: new Date(1564358880000),
    last_login: new Date(1564358940000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92130,
    is_activated: true,
    signed_up_on: new Date(1564339080000),
    last_login: new Date(1564339140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88578,
    is_activated: true,
    signed_up_on: new Date(1564266540000),
    last_login: new Date(1564266540000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83139,
    is_activated: true,
    signed_up_on: new Date(1564196700000),
    last_login: new Date(1564196760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86691,
    is_activated: true,
    signed_up_on: new Date(1564249800000),
    last_login: new Date(1564249860000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97680,
    is_activated: true,
    signed_up_on: new Date(1564432920000),
    last_login: new Date(1564432980000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87801,
    is_activated: true,
    signed_up_on: new Date(1564256700000),
    last_login: new Date(1564256760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86025,
    is_activated: true,
    signed_up_on: new Date(1564240020000),
    last_login: new Date(1564240020000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90132,
    is_activated: true,
    signed_up_on: new Date(1564288200000),
    last_login: new Date(1564288200000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96570,
    is_activated: true,
    signed_up_on: new Date(1564405380000),
    last_login: new Date(1564405500000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90798,
    is_activated: true,
    signed_up_on: new Date(1564324740000),
    last_login: new Date(1564324740000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98457,
    is_activated: false,
    signed_up_on: new Date(1564449120000),
    last_login: new Date(1564449120000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 99567,
    is_activated: true,
    signed_up_on: new Date(1564468980000),
    last_login: new Date(1564468980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86802,
    is_activated: true,
    signed_up_on: new Date(1564250280000),
    last_login: new Date(1564250280000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 100566,
    is_activated: true,
    signed_up_on: new Date(1564606080000),
    last_login: new Date(1564606140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76590,
    is_activated: true,
    signed_up_on: new Date(1564116420000),
    last_login: new Date(1564116420000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95793,
    is_activated: true,
    signed_up_on: new Date(1564372260000),
    last_login: new Date(1564372380000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93129,
    is_activated: true,
    signed_up_on: new Date(1564343700000),
    last_login: new Date(1564343760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84804,
    is_activated: true,
    signed_up_on: new Date(1564234200000),
    last_login: new Date(1564234320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96681,
    is_activated: true,
    signed_up_on: new Date(1564413540000),
    last_login: new Date(1564413840000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78699,
    is_activated: true,
    signed_up_on: new Date(1564155540000),
    last_login: new Date(1564354860000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94017,
    is_activated: true,
    signed_up_on: new Date(1564348320000),
    last_login: new Date(1564348320000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97791,
    is_activated: true,
    signed_up_on: new Date(1564435140000),
    last_login: new Date(1564435140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94905,
    is_activated: true,
    signed_up_on: new Date(1564359600000),
    last_login: new Date(1564359660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 78810,
    is_activated: true,
    signed_up_on: new Date(1564156500000),
    last_login: new Date(1564262880000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90243,
    is_activated: true,
    signed_up_on: new Date(1564288560000),
    last_login: new Date(1564288560000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92241,
    is_activated: true,
    signed_up_on: new Date(1564339740000),
    last_login: new Date(1564340100000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83250,
    is_activated: true,
    signed_up_on: new Date(1564197180000),
    last_login: new Date(1564197240000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98568,
    is_activated: true,
    signed_up_on: new Date(1564449600000),
    last_login: new Date(1564449660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99678,
    is_activated: true,
    signed_up_on: new Date(1564488540000),
    last_login: new Date(1564488600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97902,
    is_activated: true,
    signed_up_on: new Date(1564437360000),
    last_login: new Date(1565107920000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91131,
    is_activated: true,
    signed_up_on: new Date(1564329780000),
    last_login: new Date(1564329840000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88023,
    is_activated: true,
    signed_up_on: new Date(1564260480000),
    last_login: new Date(1564260600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95904,
    is_activated: true,
    signed_up_on: new Date(1564372800000),
    last_login: new Date(1564372860000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96792,
    is_activated: true,
    signed_up_on: new Date(1564418340000),
    last_login: new Date(1564418400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83361,
    is_activated: true,
    signed_up_on: new Date(1564197900000),
    last_login: new Date(1564197960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84915,
    is_activated: true,
    signed_up_on: new Date(1564234380000),
    last_login: new Date(1564234380000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85470,
    is_activated: true,
    signed_up_on: new Date(1564238160000),
    last_login: new Date(1564238160000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88689,
    is_activated: true,
    signed_up_on: new Date(1564266960000),
    last_login: new Date(1564267020000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95016,
    is_activated: true,
    signed_up_on: new Date(1564360140000),
    last_login: new Date(1564360320000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92352,
    is_activated: false,
    signed_up_on: new Date(1564340100000),
    last_login: new Date(1564340100000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 89799,
    is_activated: true,
    signed_up_on: new Date(1564282680000),
    last_login: new Date(1564282680000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86913,
    is_activated: true,
    signed_up_on: new Date(1564250460000),
    last_login: new Date(1564250460000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93240,
    is_activated: true,
    signed_up_on: new Date(1564344240000),
    last_login: new Date(1564344300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87024,
    is_activated: true,
    signed_up_on: new Date(1564250940000),
    last_login: new Date(1564250940000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98679,
    is_activated: false,
    signed_up_on: new Date(1564449600000),
    last_login: new Date(1564449600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 99789,
    is_activated: true,
    signed_up_on: new Date(1564491720000),
    last_login: new Date(1564491720000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96015,
    is_activated: true,
    signed_up_on: new Date(1564374300000),
    last_login: new Date(1564374300000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83472,
    is_activated: true,
    signed_up_on: new Date(1564198860000),
    last_login: new Date(1564198920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96903,
    is_activated: true,
    signed_up_on: new Date(1564425720000),
    last_login: new Date(1564425840000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98013,
    is_activated: true,
    signed_up_on: new Date(1564437600000),
    last_login: new Date(1564437600000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45621,
    is_activated: true,
    signed_up_on: new Date(1559523600000),
    last_login: new Date(1564956420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 91242,
    is_activated: true,
    signed_up_on: new Date(1564330020000),
    last_login: new Date(1564330140000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92463,
    is_activated: true,
    signed_up_on: new Date(1564340280000),
    last_login: new Date(1564340280000),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85026,
    is_activated: true,
    signed_up_on: new Date(1564234620000),
    last_login: new Date(1564268460000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86136,
    is_activated: true,
    signed_up_on: new Date(1564240860000),
    last_login: new Date(1564240920000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88134,
    is_activated: true,
    signed_up_on: new Date(1564260660000),
    last_login: new Date(1564260660000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76923,
    is_activated: true,
    signed_up_on: new Date(1564118160000),
    last_login: new Date(1564363500000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88800,
    is_activated: true,
    signed_up_on: new Date(1564267680000),
    last_login: new Date(1564267680000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93351,
    is_activated: true,
    signed_up_on: new Date(1564344780000),
    last_login: new Date(1564344780000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94128,
    is_activated: true,
    signed_up_on: new Date(1564351620000),
    last_login: new Date(1564351620000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94239,
    is_activated: true,
    signed_up_on: new Date(1564352760000),
    last_login: new Date(1564352880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84249,
    is_activated: true,
    signed_up_on: new Date(1564209720000),
    last_login: new Date(1564260660000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88911,
    is_activated: true,
    signed_up_on: new Date(1564270860000),
    last_login: new Date(1564270860000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85137,
    is_activated: true,
    signed_up_on: new Date(1564235220000),
    last_login: new Date(1564235280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96126,
    is_activated: true,
    signed_up_on: new Date(1564375980000),
    last_login: new Date(1564375980000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98790,
    is_activated: true,
    signed_up_on: new Date(1564452000000),
    last_login: new Date(1564452000000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95127,
    is_activated: true,
    signed_up_on: new Date(1564362420000),
    last_login: new Date(1564362420000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99900,
    is_activated: true,
    signed_up_on: new Date(1564510620000),
    last_login: new Date(1564510620000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 81141,
    is_activated: true,
    signed_up_on: new Date(1564172520000),
    last_login: new Date(1564172520000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83583,
    is_activated: true,
    signed_up_on: new Date(1564199220000),
    last_login: new Date(1564199280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 83694,
    is_activated: true,
    signed_up_on: new Date(1564199400000),
    last_login: new Date(1564199400000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86247,
    is_activated: true,
    signed_up_on: new Date(1564241220000),
    last_login: new Date(1564241400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90354,
    is_activated: true,
    signed_up_on: new Date(1564291200000),
    last_login: new Date(1564291200000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87135,
    is_activated: true,
    signed_up_on: new Date(1564252080000),
    last_login: new Date(1564278960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97014,
    is_activated: true,
    signed_up_on: new Date(1564426980000),
    last_login: new Date(1564426980000),
    sign_up_source: 'google',
    unsubscribed: 1,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98124,
    is_activated: true,
    signed_up_on: new Date(1564439280000),
    last_login: new Date(1564439340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91353,
    is_activated: true,
    signed_up_on: new Date(1564330680000),
    last_login: new Date(1564330740000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92574,
    is_activated: true,
    signed_up_on: new Date(1564340760000),
    last_login: new Date(1564340880000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87246,
    is_activated: true,
    signed_up_on: new Date(1564254420000),
    last_login: new Date(1564254480000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88245,
    is_activated: true,
    signed_up_on: new Date(1564261260000),
    last_login: new Date(1564437060000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98901,
    is_activated: false,
    signed_up_on: new Date(1564452300000),
    last_login: new Date(1564452300000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 100011,
    is_activated: true,
    signed_up_on: new Date(1564516680000),
    last_login: new Date(1564516740000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 83805,
    is_activated: true,
    signed_up_on: new Date(1564200060000),
    last_login: new Date(1564375800000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97125,
    is_activated: true,
    signed_up_on: new Date(1564427160000),
    last_login: new Date(1564427160000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93684,
    is_activated: true,
    signed_up_on: new Date(1564346700000),
    last_login: new Date(1564346760000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95238,
    is_activated: false,
    signed_up_on: new Date(1564363680000),
    last_login: new Date(1564363680000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 96237,
    is_activated: true,
    signed_up_on: new Date(1564379220000),
    last_login: new Date(1564379400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 98235,
    is_activated: true,
    signed_up_on: new Date(1564441140000),
    last_login: new Date(1564441140000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90465,
    is_activated: true,
    signed_up_on: new Date(1564292040000),
    last_login: new Date(1564292040000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 76479,
    is_activated: true,
    signed_up_on: new Date(1564100340000),
    last_login: new Date(1564100400000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85692,
    is_activated: true,
    signed_up_on: new Date(1564239060000),
    last_login: new Date(1564239060000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85248,
    is_activated: true,
    signed_up_on: new Date(1564235940000),
    last_login: new Date(1564315500000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 91464,
    is_activated: true,
    signed_up_on: new Date(1564331400000),
    last_login: new Date(1564413420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92685,
    is_activated: true,
    signed_up_on: new Date(1564341480000),
    last_login: new Date(1564341480000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93462,
    is_activated: true,
    signed_up_on: new Date(1564345440000),
    last_login: new Date(1564345440000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94350,
    is_activated: true,
    signed_up_on: new Date(1564353180000),
    last_login: new Date(1564353180000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 99012,
    is_activated: true,
    signed_up_on: new Date(1564452480000),
    last_login: new Date(1564452540000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 88356,
    is_activated: true,
    signed_up_on: new Date(1564262280000),
    last_login: new Date(1564262340000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 61161,
    is_activated: true,
    signed_up_on: new Date(1562616000000),
    last_login: new Date(1562734860000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 96348,
    is_activated: true,
    signed_up_on: new Date(1564386360000),
    last_login: new Date(1564386600000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 92796,
    is_activated: true,
    signed_up_on: new Date(1564342140000),
    last_login: new Date(1564342200000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 100122,
    is_activated: false,
    signed_up_on: new Date(1564551420000),
    last_login: new Date(1564551420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 89022,
    is_activated: true,
    signed_up_on: new Date(1564274580000),
    last_login: new Date(1564274640000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 85359,
    is_activated: true,
    signed_up_on: new Date(1564237680000),
    last_login: new Date(1564237680000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 84138,
    is_activated: true,
    signed_up_on: new Date(1564203360000),
    last_login: new Date(1564203420000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 93573,
    is_activated: false,
    signed_up_on: new Date(1564346280000),
    last_login: new Date(1564346280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 86358,
    is_activated: true,
    signed_up_on: new Date(1564245420000),
    last_login: new Date(1564245420000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 94461,
    is_activated: true,
    signed_up_on: new Date(1564356180000),
    last_login: new Date(1564356240000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87357,
    is_activated: true,
    signed_up_on: new Date(1564255200000),
    last_login: new Date(1564255200000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 97236,
    is_activated: true,
    signed_up_on: new Date(1564428360000),
    last_login: new Date(1564428360000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 95349,
    is_activated: true,
    signed_up_on: new Date(1564365600000),
    last_login: new Date(1564428900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 90576,
    is_activated: true,
    signed_up_on: new Date(1564298040000),
    last_login: new Date(1564331280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45399,
    is_activated: true,
    signed_up_on: new Date(1559460540000),
    last_login: new Date(1564980780000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 48729,
    is_activated: true,
    signed_up_on: new Date(1560681060000),
    last_login: new Date(1561298280000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 70596,
    is_activated: true,
    signed_up_on: new Date(1563070800000),
    last_login: new Date(1563070800000),
    sign_up_source: 'linkedin',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 45288,
    is_activated: true,
    signed_up_on: new Date(1559454000000),
    last_login: new Date(1565043960000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 0,
  });
  await sqltestuser.create({
    user_id: 69486,
    is_activated: true,
    signed_up_on: new Date(1562985120000),
    last_login: new Date(1562985180000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 64380,
    is_activated: true,
    signed_up_on: new Date(1562664840000),
    last_login: new Date(1562664900000),
    sign_up_source: '',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 87912,
    is_activated: true,
    signed_up_on: new Date(1564257600000),
    last_login: new Date(1564257600000),
    sign_up_source: 'google',
    unsubscribed: 0,
    user_type: 1,
  });
  await sqltestuser.create({
    user_id: 68265,
    is_activated: true,
    signed_up_on: new Date(1562876100000),
    last_login: new Date(1562876220000),
    sign_up_source: '',
    unsubscribed: 1,
    user_type: 1,
  });
};

(async () => {
  await dropTables();
  await insertStuff();
})();
