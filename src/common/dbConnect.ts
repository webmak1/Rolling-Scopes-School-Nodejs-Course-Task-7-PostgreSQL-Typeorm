import config from 'ormconfig';
import { createConnection } from 'typeorm';

const connectToDB = async () => {
  let connection;

  try {
    connection = await createConnection(config);
    if (!connection.isConnected) {
      // @ts-ignore
      await connection.connect();
    }
    console.log('Connected To PostgreSQL!');
  } catch (err) {
    console.log('Err', err);
  }
};

// @ts-ignore
export const TryDBConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    console.log('DB connection err', err);
  }
};

// import config from 'ormconfig';
// import { createConnection, getConnection } from 'typeorm';

// const connectToDB = async () => {
//   let connection;

//   try {
//     connection = getConnection();
//   } catch (err) {
//     console.log('Error 1', err);
//   }

//   try {
//     if (connection) {
//       // @ts-ignore
//       if (!connection.isConnected) {
//         // @ts-ignore
//         await connection.connect();
//       }
//     } else {
//       await createConnection(config);
//       console.log('Connected');
//     }
//   } catch (err) {
//     console.error('Connection error', err);
//   }
// };

// // @ts-ignore
// export const TryDBConnect = async (cb: () => void) => {
//   try {
//     await connectToDB();
//     cb();
//   } catch (err) {
//     console.log('DB connection err', err);
//   }
// };
