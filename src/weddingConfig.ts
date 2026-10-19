export interface WeddingEvent {
  title: string;
  subTitle?: string;
  date: string; // ISO format: YYYY-MM-DD
  displayDate: string;
  day: string;
  time: string;
  venueName: string;
  address: string;
  notes?: string;
  mapsUrl: string;
  calendarTitle: string;
  calendarDescription: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      parents: string;
      residence: string;
      phone?: string;
    };
    bride: {
      firstName: string;
      fullName: string;
      parents: string;
      residence: string;
      phone?: string;
    };
    sharingHappiness: string;
    photo: string;
    photoSquare: string;
    cardReferencePhoto: string;
  };
  scripture: {
    verse: string;
    reference: string;
    secondaryVerse?: string;
    secondaryReference?: string;
  };
  invitationMessage: {
    headline: string;
    body: string;
    malayalamTitle: string;
    malayalamBody: string;
    malayalamParentsBride: string;
    malayalamParentsGroom: string;
    malayalamBride: string;
    malayalamGroom: string;
    malayalamCeremony: string;
    malayalamReception: string;
    malayalamSharingHappiness: string;
  };
  events: {
    reception: WeddingEvent;
    ceremony: WeddingEvent;
  };
  ourStory: Array<{
    title: string;
    subtitle: string;
    description: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    caption: string;
    aspectRatio: string;
  }>;
  rsvp: {
    recipientPhone: string;
    whatsappNumber: string;
    enableGoogleSheetsBackup: boolean;
    googleFormUrl?: string;
  };
  music: {
    title: string;
    artist: string;
    audioUrl?: string; // Optional custom audio file or synthesized romantic instrumental
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstName: "Prince",
      fullName: "Prince. V. S",
      parents: "Mr. C. K. Vijayakumar & Mrs. Sheelakumari. A. S",
      residence: "V.S. Bhavan, Amaravila, Venniyoor, Nellivila P.O.",
      phone: "+91 9349401520",
    },
    bride: {
      firstName: "Anju",
      fullName: "Anju. J. S",
      parents: "Jayakumar. R & V. Shaji Lekha",
      residence: "J.K. Sadanam, Thettivila, Kalliyoor P.O.",
      phone: "+91 9349401520",
    },
    sharingHappiness: "Akhil. J. S, Subi",
    photo: "/images/couple.jpg",
    photoSquare: "/images/couple-portrait-square.jpg",
    cardReferencePhoto: "/images/wedding-card-original.jpg",
  },
  scripture: {
    verse: "And over all these virtues put on love, which binds them all together in perfect unity.",
    reference: "Colossians 3:14",
    secondaryVerse: "Therefore what God has joined together, let no one separate.",
    secondaryReference: "Mark 10:9",
  },
  invitationMessage: {
    headline: "With the Blessings of Almighty God and Our Families",
    body: "We cordially invite your esteemed presence and blessings with family on the auspicious occasion of the marriage of our daughter Anju. J. S with Prince. V. S. We joyfully invite you to witness and celebrate the beginning of our new journey together.",
    malayalamTitle: "വിവാഹ ക്ഷണക്കത്ത്",
    malayalamParentsBride: "ജയകുമാർ. R & വി. ഷാജി ലേഖ\nജെ.കെ. സദനം, തെറ്റിവില, കല്ലിയൂർ പി.ഒ. ഫോൺ: 9349401520",
    malayalamBride: "ഞങ്ങളുടെ മകൾ അഞ്ജു. ജെ. എസ് (Anju. J.S)",
    malayalamParentsGroom: "വി.എസ്.ഭവനിൽ ശ്രീ. സി. കെ. വിജയകുമാർ & ശ്രീമതി ഷീലകുമാരി. എ. എസ് ഇവരുടെ മകൻ",
    malayalamGroom: "പ്രിൻസ്. വി. എസ് (Prince. V.S)",
    malayalamBody: "തമ്മിലുള്ള വിശുദ്ധ വിവാഹം 2026 നവംബർ 12 വ്യാഴാഴ്ച രാവിലെ 9.30 ന് വെണ്ണിയൂർ മറ്റീപുരം സി.എസ്.ഐ പള്ളിയിൽ വെച്ചും തുടർന്ന് വെങ്ങാനൂർ നീലകേശി ഓഡിറ്റോറിയത്തിൽ വെച്ചും നടത്തപ്പെടുവാൻ ദൈവകൃപയിൽ നിശ്ചയിച്ചിരിക്കുന്ന വിവരം സസന്തോഷം അറിയിച്ചുകൊള്ളുന്നു.",
    malayalamCeremony: "വിവാഹ മുഹൂർത്തം: 2026 നവംബർ 12 വ്യാഴം രാവിലെ 9.30 ന് സി.എസ്.ഐ പള്ളി, മറ്റീപുരം, വെണ്ണിയൂർ. തുടർന്ന് നീലകേശി ഓഡിറ്റോറിയത്തിൽ സൽക്കാരം.",
    malayalamReception: "സ്വീകരണം: 2026 നവംബർ 11 ബുധൻ വൈകുന്നേരം 4.30 മുതൽ 8.30 വരെ നീലകേശി ഓഡിറ്റോറിയം, വെങ്ങാനൂർ",
    malayalamSharingHappiness: "സ്നേഹാദരങ്ങളോടെ: അഖിൽ. ജെ. എസ്, സുബി",
  },
  events: {
    reception: {
      title: "Wedding Reception",
      subTitle: "An evening of celebration, dinner & fellowship",
      date: "2026-11-11",
      displayDate: "11th November 2026",
      day: "Wednesday",
      time: "4:30 PM to 8:30 PM",
      venueName: "Neelakeshi Auditorium",
      address: "Venganoor, Thiruvananthapuram, Kerala",
      notes: "Join us for an evening of warm greetings, celebration, and dinner before the wedding day.",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Neelakeshi+Auditorium+Venganoor",
      calendarTitle: "Wedding Reception: Prince & Anju",
      calendarDescription: "Wedding Reception of Prince V.S & Anju J.S at Neelakeshi Auditorium, Venganoor.",
    },
    ceremony: {
      title: "Holy Matrimony & Solemnization",
      subTitle: "Sacred Church Service followed by Reception Luncheon",
      date: "2026-11-12",
      displayDate: "12th November 2026",
      day: "Thursday",
      time: "9:30 AM",
      venueName: "C.S.I Church Matteepuram, Venniyoor",
      address: "Matteepuram, Venniyoor, Nellivila P.O., Thiruvananthapuram, Kerala",
      notes: "Followed by luncheon and wedding functions at Neelakeshi Auditorium, Venganoor.",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=CSI+Church+Matteepuram+Venniyoor",
      calendarTitle: "Holy Matrimony: Prince & Anju",
      calendarDescription: "The Christian Wedding Ceremony of Prince V.S and Anju J.S at C.S.I Church Matteepuram, Venniyoor, followed by reception luncheon at Neelakeshi Auditorium, Venganoor.",
    },
  },
  ourStory: [
    {
      title: "God's Perfect Timing",
      subtitle: "A Sacred Beginning",
      description: "Guided by faith, prayer, and the warm blessings of both our families, our paths crossed. What began as an introduction soon turned into heart-to-heart conversations filled with laughter, shared values, and boundless joy.",
    },
    {
      title: "Two Hearts, One Faith",
      subtitle: "Walking in Grace",
      description: "Through mutual respect and devotion, we discovered a companion for life. With every step, we felt God's gentle hand guiding our journey towards a shared tomorrow.",
    },
    {
      title: "The Vow of Forever",
      subtitle: "November 2026",
      description: "Standing together before God, our parents, and all our beloved family and friends, we prepare to say 'I do' and dedicate our lives to each other in holy matrimony.",
    },
  ],
  gallery: [
    {
      id: 1,
      url: "/images/couple.jpg",
      caption: "Prince & Anju — Celebrating Our Sacred Love",
      aspectRatio: "portrait",
    },
    {
      id: 2,
      url: "/images/couple-portrait-square.jpg",
      caption: "Smiling into Our Forever",
      aspectRatio: "square",
    },
    {
      id: 3,
      url: "/images/wedding-card-original.jpg",
      caption: "The Traditional Wedding Invitation Card",
      aspectRatio: "landscape",
    },
  ],
  rsvp: {
    recipientPhone: "+91 9349401520",
    whatsappNumber: "919349401520",
    enableGoogleSheetsBackup: false,
  },
  music: {
    title: "Canon in D / Wedding Grace",
    artist: "Romantic Instrumental",
    audioUrl: "", // Dynamic synthesized soft romantic piano ambience & audio player
  },
};
