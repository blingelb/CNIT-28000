class Member {
  constructor(memberID, memberEmail, memberPassword) {
    this.memberID = memberID;
    this.memberEmail = memberEmail;
    this.memberPassword = memberPassword;
  }

  function create(String id, String email, String password) {
    Member newMember = new Member(id, email, password);

  }
}

class Sponsor {
  constructor(sponsorID, sponsorEmail, sponsorPassword) {
    this.sponsorID = sponsorID;
    this.sponsorEmail = sponsorEmail;
    this.sponsorPassword = sponsorPassword;
  }

  function create(String id, String email, String password) {
    Sponsor newSponsor = new Member(id, email, password);
  }
}
