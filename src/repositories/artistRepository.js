import {prisma} from '../lib/prisma.js';

// export async function getAll() {
//     const artists = await prisma.artist.findMany({
//         where: {
//             id: true
//         }
//     });
// };

export async function create(artistData) {
    const artist = await prisma.artist.create({
        data: artistData
    });

    return artist;
};

const artistRepository = {
    // getAll,
    create
};

export default artistRepository;