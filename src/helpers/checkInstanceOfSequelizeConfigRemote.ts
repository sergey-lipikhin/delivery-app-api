import {
  SequelizeConfigLocal,
  SequelizeConfigRemote,
} from '../types/SequelizeConfig';

export function checkInstanceOfSequelizeConfigRemote(
  object: SequelizeConfigLocal | SequelizeConfigRemote,
): object is SequelizeConfigRemote {
  return 'uri' in object;
}
