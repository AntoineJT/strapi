import { StrapiCommand } from "../../../types";
import { runAction } from "../../../utils/helpers";
import action from "./action";

/**
 * `$ strapi database:create-migration`
 */
const command: StrapiCommand = ({ command }) => {
  command
    .command('database:create-migration')
    .alias('db:create-migration')
    .description('Create a database migration file')
    .argument('<name>')
    .action(runAction('database:create-migration', action));
};

export default command;
