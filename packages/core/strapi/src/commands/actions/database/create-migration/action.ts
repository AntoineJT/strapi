import path from 'path';
import strapi from '../../../../Strapi';

interface CmdOptions {
  name: string;
}

export default async ({ name }: CmdOptions) => {

  const appContext = await strapi.compile();
  // TODO get folder from (await strapi(appContext).load()).dirs (...)

  const migrationsFolder = path.resolve(appContext.appDir, 'database', 'migrations');

  console.log(migrationsFolder, name);

  // TODO write real code

  process.exit(0);
};
