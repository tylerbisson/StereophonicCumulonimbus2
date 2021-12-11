/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const DJDeeon = await prisma.user.upsert({
    where: { email: 'djdeeon@cool.club' },
    update: {},
    create: {
      email: 'djdeeon@cool.club',
      name: 'DJ Deeon',
      username: 'djdeeon',
      recordings: {
        create: {
          title: '2 B Free',
          description: 'cool beat',
          art: '2+B+free.jpg',
          audio: '01+2+B+Free.m4a',
        },
      },
    },
  });

  const Music4Dogs = await prisma.user.upsert({
    where: { email: 'Music4Dogs@cool.club' },
    update: {},
    create: {
      email: 'Music4Dogs@cool.club',
      name: 'Music 4 Dogs',
      username: 'Music4Dogs',
      recordings: {
        create: {
          title: 'piper maru',
          description: 'cool beat',
          art: 'piper+maru.jpg',
          audio: 'piper+maru+1.m4a',
        },
      },
    },
  });

  const PalmbomanII = await prisma.user.upsert({
    where: { email: 'PalmbomanII@cool.club' },
    update: {},
    create: {
      email: 'PalmbomanII@cool.club',
      name: 'Palmboman II',
      username: 'PalmbomanII',
      recordings: {
        create: {
          title: 'ALOHAnet',
          description: 'cool beat',
          art: 'ALOHAnet.jpg',
          audio: '03+ALOHAnet.m4a',
        },
      },
    },
  });

  const DJCentral = await prisma.user.upsert({
    where: { email: 'DJCentral@cool.club' },
    update: {},
    create: {
      email: 'DJCentral@cool.club',
      name: 'DJ Central',
      username: 'DJCentral',
      recordings: {
        create: {
          title: 'DRIVE (DJ Sports Club Mix)',
          description: 'cool beat',
          art: 'drive.jpg',
          audio: 'DRIVE+(DJ+Sports+Club+Mix).m4a',
        },
      },
    },
  });

  const WashingtonPhillips = await prisma.user.upsert({
    where: { email: 'WashingtonPhillips@cool.club' },
    update: {},
    create: {
      email: 'WashingtonPhillips@cool.club',
      name: 'Washington Phillips',
      username: 'WashingtonPhillips',
      recordings: {
        create: {
          title: "Lift Him Up That's All",
          description: 'cool beat',
          art: 'lift+him+up+thats+all.jpg',
          audio: "11+Lift+Him+Up+That's+ All.m4a",
        },
      },
    },
  });

  const Leonce = await prisma.user.upsert({
    where: { email: 'Leonce@cool.club' },
    update: {},
    create: {
      email: 'Leonce@cool.club',
      name: 'Leonce',
      username: 'Leonce',
      recordings: {
        create: {
          title: "Jeremih - Impatient (Leonce Bounce Mix)",
          description: 'cool beat',
          art: 'Impatient+(Leonce+Bounce+Mix).jpg',
          audio: "07+Jeremih+-+Impatient+(Leonce+Bounce+Mix).m4a",
        },
      },
    },
  });

  const HiroshiYoshimura = await prisma.user.upsert({
    where: { email: 'HiroshiYoshimura@cool.club' },
    update: {},
    create: {
      email: 'HiroshiYoshimura@cool.club',
      name: 'Hiroshi Yoshimura (吉村弘)',
      username: 'HiroshiYoshimura',
      recordings: {
        create: {
          title: "Singing Stream (Spring Mix)",
          description: 'cool beat',
          art: 'Singing+Stream+(Spring+Mix).jpg',
          audio: "02+Singing+Stream+(Spring+Mix).m4a",
        },
      },
    },
  });

  const RocMarciano = await prisma.user.upsert({
    where: { email: 'RocMarciano@cool.club' },
    update: {},
    create: {
      email: 'RocMarciano@cool.club',
      name: 'Roc Marciano',
      username: 'RocMarciano',
      recordings: {
        create: {
          title: "The Horse's Mouth",
          description: 'cool beat',
          art: 'the+horses+mouth.jpg',
          audio: "01.+The+Horse's+Mouth+(Prod.+Preservation).m4a",
        },
      },
    },
  });

  const DelroyEdwards = await prisma.user.upsert({
    where: { email: 'DelroyEdwards@cool.club' },
    update: {},
    create: {
      email: 'DelroyEdwards@cool.club',
      name: 'Delroy Edwards',
      username: 'DelroyEdwards',
      recordings: {
        create: {
          title: "4 Club Use Only",
          description: 'cool beat',
          art: '4+club+use+only.jpg',
          audio: "01+For+Club+Use+Only+(Original+Mix).m4a",
        },
      },
    },
  });

  const Terekke = await prisma.user.upsert({
    where: { email: 'Terekke@cool.club' },
    update: {},
    create: {
      email: 'Terekke@cool.club',
      name: 'Terekke',
      username: 'Terekke',
      recordings: {
        create: {
          title: "BB2",
          description: 'cool beat',
          art: 'BB2.jpg',
          audio: "02+BB2.m4a",
        },
      },
    },
  });

  const GeslotenCirkel = await prisma.user.upsert({
    where: { email: 'GeslotenCirkel@cool.club' },
    update: {},
    create: {
      email: 'GeslotenCirkel@cool.club',
      name: 'Gesloten Cirkel',
      username: 'GeslotenCirkel',
      recordings: {
        create: {
          title: "Submit X",
          description: 'cool beat',
          art: 'submit+x.jpg',
          audio: "03+Submit-X.m4a",
        },
      },
    },
  });

  const TheConeheads = await prisma.user.upsert({
    where: { email: 'TheConeheads@cool.club' },
    update: {},
    create: {
      email: 'TheConeheads@cool.club',
      name: 'The Coneheads',
      username: 'TheConeheads',
      recordings: {
        create: {
          title: "OUT OF CONETROL",
          description: 'cool beat',
          art: 'coneheads.jpg',
          audio: "01+OUT+OF+CONETROL.m4a",
        },
      },
    },
  });

  const CTT = await prisma.user.upsert({
    where: { email: 'CT_T@cool.club' },
    update: {},
    create: {
      email: 'CT_T@cool.club',
      username: 'CT_T',
      name: 'CT_T',
      recordings: {
        create: {
          title: 'Leaf Crackle',
          description: 'cool beat',
          art: 'thats_spooky.jpg',
          audio: '03+School+Bell+Like+Leaf+Crackle+Like+Champaine+Fizzle.m4a',
        },
      },
    },
  });

  console.log({
    DJDeeon,
    Music4Dogs,
    PalmbomanII,
    DJCentral,
    WashingtonPhillips,
    Leonce,
    HiroshiYoshimura,
    RocMarciano,
    DelroyEdwards,
    Terekke,
    GeslotenCirkel,
    TheConeheads,
    CTT
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
