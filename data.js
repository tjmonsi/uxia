module.exports = {
  stories: [
    {
      country: 'Japan',
      image: '/images/city/ic_japan.png'
    },
    {
      country: 'Korea',
      image: '/images/city/ic_korea.png'
    },
    {
      country: 'India',
      image: '/images/city/ic_india.png'
    },
    {
      country: 'Taiwan',
      image: '/images/city/ic_taiwan.png'
    },
    {
      country: 'Hong Kong',
      image: '/images/city/ic_hongkong.png'
    },
    {
      country: 'China',
      image: '/images/city/ic_china.png'
    },
    {
      country: 'Philippines',
      image: '/images/city/ic_philippines.png'
    },
    {
      country: 'Thailand',
      image: '/images/city/ic_thailand.png'
    },
    {
      country: 'Malaysia',
      image: '/images/city/ic_malaysia.png'
    },
    {
      country: 'Singapore',
      image: '/images/city/ic_singapore.png'
    },
    {
      country: 'Vietnam',
      image: '/images/city/ic_vietnam.png'
    },
    {
      country: 'Indonesia',
      image: '/images/city/ic_indonesia.png'
    }
  ].sort((i, j) => {
    if (i.country < j.country) {
      return -1
    } else if (i.country > j.country) {
      return 1
    }
    return 0
  }),

  organizations: [
    {
      location: 'Kuala Lumpur, Malaysia',
      image: '/images/img_logo-AirAsia.png'
    },
    {
      location: 'Bangkok, Thailand',
      image: '/images/img_logo-Agoda.png'
    },
    {
      location: 'Bangkok, Thailand',
      image: '/images/img_Taskworld.png'
    },
    {
      location: 'Singapore, Singapore',
      image: '/images/img_logo-Lazada.png'
    },
    {
      location: 'Manila, Philippines',
      image: '/images/img_logo-Globe.png'
    },
    {
      location: 'Ho Chi Minh, Vietnam',
      image: '/images/img_logo-VietnamWorks.png'
    }
  ],

  testimonies: [
    {
      testimony: '“I’m optimistic about the future of UX here in my company and Malaysia. Slowly but surely we are heading towards the flourishing of the UX industry”',
      name: 'Suzen Lim',
      country: 'MALAYSIA',
      image: '/images/img_SuzenLim.png'
    },
    {
      testimony: '“The way we approach UX Design in Japan is nothing compared to the US. The cultural differences are the main reason why there is such a discrepancy.”',
      name: 'Janet Fu',
      country: 'JAPAN',
      image: '/images/img_JanetFu.png'
    }
  ],

  reports: [
    {
      text: 'Salary Information',
      image: '/images/icons/icon_SalaryInfo.svg'
    },
    {
      text: 'Career Satisfaction',
      image: '/images/icons/icon_CareerSatisfaction.svg'
    },
    {
      text: 'UX Education',
      image: '/images/icons/icon_UXEducation.svg'
    },
    {
      text: 'UX Events and Communities in Asia',
      image: '/images/icons/icon_UXEvents.svg'
    },
    {
      text: 'The Future of the Asian UX Industry',
      image: '/images/icons/icon_UXFuture.svg'
    },
    {
      text: 'Problems Facing the UX field',
      image: '/images/icons/icon_UXProblems.svg'
    }
  ],

  positions: [
    {
      role: 'Designer or Researcher'
    },
    {
      role: 'Design or Product Manager'
    },
    {
      role: 'Director or Head of Design/Product'
    },
    {
      role: 'C-Level Executive'
    },
    {
      role: 'Business Owner'
    },
    {
      role: 'Other'
    }
  ],

  hire: [
    {
      role: 'Yes'
    },
    {
      role: 'Possibly in the future'
    },
    {
      role: 'No'
    }
  ]
}