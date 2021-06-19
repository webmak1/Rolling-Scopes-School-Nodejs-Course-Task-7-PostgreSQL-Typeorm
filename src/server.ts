import { TryDBConnect } from 'common/dbConnect';
import { app } from './app';
import { config } from './common/config';

TryDBConnect(() => {
  app.listen(config.PORT, () => {
    if (config.PORT) {
      console.log(`App is running on http://localhost:${config.PORT}`);
    } else {
      console.log(`App is running on http://localhost`);
    }
  });
});
