module.exports = {
  unknown: {
    title: 'session unknown',
    session: null,
  },
  loading: {
    title: 'session loading',
    session: {
      data: null,
      status: 'loading',
    },
  },
  admin: {
    title: 'admin not authenticated',
    session: {
      data: {
        user: {
          id: 1,
          role: 'admin',
          name: 'Jhon Doe',
          email: 'admin@local',
          image: '/images/avatar.png',
        },
      },
      status: 'unauthenticated',
    },
  },
  adminAuthed: {
    title: 'admin authenticated',
    session: {
      data: {
        user: {
          id: 1,
          role: 'admin',
          name: 'Jhon Doe',
          email: 'admin@local',
          image: '/images/avatar.png',
        },
      },
      status: 'authenticated',
    },
  },
  user: {
    title: 'user not authenticated',
    session: {
      data: {
        user: {
          id: 999,
          role: 'user',
          name: 'Jhon Doe',
          email: 'user@local',
          image: '/images/avatar.png',
        },
      },
      status: 'unauthenticated',
    },
  },
  userAuthed: {
    title: 'user authenticated',
    session: {
      data: {
        user: {
          id: 11,
          role: 'user',
          name: 'Jhon Doe',
          email: 'user@local',
          image: '/images/avatar.png',
        },
      },
      status: 'authenticated',
    },
  },
};
