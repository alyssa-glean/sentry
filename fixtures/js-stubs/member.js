import {User} from './user';

export function Member(params = {}) {
  return {
    id: '1',
    email: 'sentry1@test.com',
    name: 'Sentry 1 Name',
    orgRole: 'member',
    orgRolesFromTeams: [],
    teamRoles: [],
    role: 'member',
    roleName: 'Member',
    pending: false,
    expired: false,
    flags: {
      'sso:linked': false,
      'idp:provisioned': false,
      'idp:role-restricted': false,
    },
    user: User(),
    inviteStatus: 'approved',
    ...params,
  };
}
