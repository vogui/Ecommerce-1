const { Products } = require("./models/index");
const { Category } = require("./models/index");
const { User } = require("./models/index");

const product1 = Products.create({
  title: "Ale",
  picture: "https://www.linguavox.es/es/wp-content/uploads/birra.png",
  price: 150,
});

const product2 = Products.create({
  title: "Lager",
  picture:
    "https://c.pxhere.com/photos/08/ff/beer_drink_oktoberfest_thirst_alcohol_refreshment_beer_glass-1034613.jpg!d",
  price: 120,
});

const product3 = Products.create({
  title: "Porter",
  picture:
    "https://uc19206ffd3e24d6c4ea1e8ebf31.previews.dropboxusercontent.com/p/thumb/AA3ZYztYYGZ0Y6Q9h6XdzbaR2_EVkDO2uVIvzXwKwGOogGNR_vweGO7KUhGIJJhAl3ycFa-Kg32kdUioEyu7bTiOqJUbxMEVLXwTp97v2bIRxaBPIm3rWAHkbE-AI4hHd6L5O0DNw7M-bF5yFYIfL-55WHBLFTIcgs-WR8EAPbifVT1VTV7YG56iAQk98df4TIK7Z1DHbLcfftNX45hbHv0ac644oOn6kAHim8J88G_7bxZGnM7V75urS-DQJ0Zw4OmNv_mS9f76cq_nYK87XFfkx4_VWd63mvwC0aontVhjjFaRM-X6LnpnVDs_ehyWS3aZhe8ji-_omzDuiuDxN-bGs7AESEH0SUJrXDFJy_XNsa3Lk2ppyIjD_pghm5bUHk9gheuPXMFcW6UGSINCp2_y/p.jpeg?fv_content=true&size_mode=5",
  price: 170,
});

const product4 = Products.create({
  title: "Trigueña",
  picture:
    "https://ucb4ae3481e8070a4ee5e2af70ed.previews.dropboxusercontent.com/p/thumb/AA2sXfaXdoHyqh2_B1IXzg13LsKT-y18T3nJZKLU-gjMsAhBzdaCm3av8ADorh7UvN-b96qMD0I75aEnt-coYw8Uhso74GB_0XF2fs-PrhpB1V40gvSlqiLCUOPU4mRb617OHjgXsX91vXJjbO3EYm-QbtOJyBikw5t4Sld5dKcpV4Y9tHhsCGJsyQW6njNKRXglKEw4o7R1NTKLxAUuBQ7jxZ3ag59ma7E-e-qO_gFLHASfKiqUppQ8X_rrjKCfizA7nyWJqM5PGd2YC5HQgxyygLGFatMVpn2eHsHZJE_IGpvyiRz5s--UkeWRVonFGFniIsz4UCQMenmOdJBQmWVVphc6LsKCm0g9KDur2_g6OmOeLlEvkZqQ9R4iKT9_8UF2WZesZ5RpVuZ1oVl96fai/p.jpeg?fv_content=true&size_mode=5",
  price: 145,
});

const product6 = Products.create({
  title: "Stout",
  picture:
    "https://uc485ef602960ffd57c371446be1.previews.dropboxusercontent.com/p/thumb/AA0bUg_KEwddykb-rSwX5hghzez0s3l6_vOALNMVENoeoTLSMMWtpeDhuUndpUGKHXBdUCre3z_j5Tn4G5g2eIffIRc3i1mBFA0hWwvMFEN2w7fKxJh7Y4ZxyCRCYdCnXvpB5o-TZcnt4LlFWwSTMJrG-2Io47I2VeT9H9qvm8J7ht86s_eWgGWnXaILiaUlJIT7hqvTvWwWSfWSKKD6qjbWckXrMwkcv4tphvi7hWxW17AdC4tehz-MAeWK9z3von1w2sxEdWoO5vCE6OWmWsdjigXLtVFKzMuSIiNoZ_jCyqYEQV7y-Tvtz10ljyRy7l5pNl9u8ZmNIQBhqp4QsaaoAEsA-T3QEWbr-DPJnnGKy1DNrSQ9VSvqodI30z5DhfSOsx_CC6b0vG8ossvi-uB2/p.jpeg?fv_content=true&size_mode=5",
  price: 135,
});

const category1 = Category.create({
  name: "Rubias",
});

const category2 = Category.create({
  name: "Negras",
});

const category3 = Category.create({
  name: "Coloradas",
});

const user1 = User.create({
  email: "borrachin@gmail.com",
  password: "123",
  name: "Sr. Borracho",
  adress: "Av. Siempreviva 123",
});
