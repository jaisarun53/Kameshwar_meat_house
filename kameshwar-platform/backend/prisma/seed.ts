import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.businessInfo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Kameshwar Meat House',
      tagline: 'Clay-pot katiya, charcoal fire, and the taste of Katahariya.',
      story:
        'A food destination inspired by the heritage of Katahariya and the deep flavor of traditional katiya.',
      primaryPhone: '+977 981-7218111',
      whatsappPhone: '+977 981-7218111',
      addressLine: 'Katahariya-5',
      ward: '5',
      municipality: 'Katahariya',
      district: 'Rautahat',
      province: 'Madhesh Province',
      country: 'Nepal',
      openingHours: 'Owner confirmation pending',
    },
  });

  const category = await prisma.category.upsert({
    where: { slug: 'signature-katiya' },
    update: {},
    create: {
      name: 'Signature Katiya',
      slug: 'signature-katiya',
      displayOrder: 1,
    },
  });

  await prisma.menuItem.createMany({
    data: [
      {
        categoryId: category.id,
        name: 'Mutton Katiya',
        description: 'Traditional clay-pot mutton prepared over slow charcoal heat.',
        price: 850,
        currency: 'NPR',
        isFeatured: true,
        displayOrder: 1,
      },
      {
        categoryId: category.id,
        name: 'Sekuwa',
        description: 'Charcoal-grilled meat with a smoky local spice profile.',
        price: 650,
        currency: 'NPR',
        displayOrder: 2,
      },
    ],
    skipDuplicates: true,
  });

  await prisma.testimonial.createMany({
    data: [
      {
        customerName: 'Public Review',
        sourceLabel: 'Online listing',
        quote: 'Known for authentic mutton katiya and simple local serving style.',
        isFeatured: true,
        displayOrder: 1,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch(async (error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
