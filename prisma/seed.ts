import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '109175f6-9b52-49f6-9463-9db33a92351d',
      title: 'Unite summit',
      slug: 'unite-summit',
      details: 'um ecento p/ devs apaxinados(as) por código!',
      maximumAttendees: 120,

    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})