import {VOAlliance, VOAllianceMember, VOPost, VOpost_attachment} from './vos';
import {
  SOaccount_expanded, SOservice_expanded, Need_CreateNeed, Need_UpdateNeed,
  Offer_CreateOffer, Offer_UpdateOffer, SOv_account, SOalliance, SOalliance_member,
  SOupdate_profile_req, SOattachment
} from './server-objects';
import {SONeedUpdateNeed} from './sos';
import {VOUserExt, VOUser} from '../app-login/vouser';

// private mapPostSend(post:VOPost): SONeed_UpdateNeed {
// export function mapPostSend(post: VOPost): any {

export function mapAttachments_req(attachments: VOpost_attachment[]): SOattachment[] {
  return attachments.map(function (attachment) {
    return {
      Id: attachment.id,
      Name: attachment.name,
      Type : attachment.type,
      Prefix: attachment.prefix,
      IsDefault: attachment.is_default
    }
  });
}

export function mapPostSend_CreateNeed(post: VOPost): Need_CreateNeed {

  let attachments = mapAttachments_req(post.attachments);

  return {
    title: post.title,
    summary: post.description,
    // description: post.description,
    categoryid: post.categoryid,
    isExchange: post.isExchange,
    isDonation: post.isDonate,
    isInternship: post.isInternship,
    isPartnership: post.isPartnership,
    isMoney: post.isMoney,
    commissionFrom: post.commissionFrom,
    commissionTo: post.commissionTo,
    fixedRateFrom: post.fixedRateFrom,
    fixedRateTo: post.fixedRateTo,
    hourlyRateFrom: post.hourlyRateFrom,
    hourlyRateTo: post.hourlyRateTo,
    latitude: 24,
    longitude: 23,
    city: post.city,
    province: post.province,
    country: post.country,
    keywords:  post.keywords?post.keywords.split(','):null,
    attachments: attachments,
    // keywords:  post.keywords?post.keywords:null,
    // pictures: [],
    // videos:[],
    // documents: [''],

    // ownerid: post.ownerId,
    // is_available: post.isAvailable,
    isPublic: post.isVisibleToPublic
    // portafolio: 'some portfolio',
    // alliance: post.alliance
  }
}

export function mapPostSend_UpdateNeed(post: VOPost): Need_UpdateNeed {

  let attachments = mapAttachments_req(post.attachments);

  return {
    id: post.id,
    title: post.title,
    summary: post.description,
    // description: post.description,
    categoryid: post.categoryid,
    isExchange: post.isExchange,
    isDonation: post.isDonate,
    isInternship: post.isInternship,
    isPartnership: post.isPartnership,
    isMoney: post.isMoney,
    commissionFrom: post.commissionFrom,
    commissionTo: post.commissionTo,
    fixedRateFrom: post.fixedRateFrom,
    fixedRateTo: post.fixedRateTo,
    hourlyRateFrom: post.hourlyRateFrom,
    hourlyRateTo: post.hourlyRateTo,
    latitude: 24,
    longitude: 23,
    city: post.city,
    province: post.province,
    country: post.country,
    keywords:  post.keywords?post.keywords.split(','):null,
    attachments: attachments,
    // keywords:  post.keywords?post.keywords:null,
    // pictures: [],
    // videos:[],
    // documents: [''],

    // ownerid: post.ownerId,
    // is_available: post.isAvailable,
    isPublic: post.isVisibleToPublic
    // portafolio: 'some portfolio',
    // alliance: post.alliance
  }
}

export function mapPostSend_CreateOffer(post: VOPost): Offer_CreateOffer {

  let attachments = mapAttachments_req(post.attachments);

  return {
    title: post.title,
    summary: post.description,
    // description: post.description,
    categoryid: post.categoryid,
    isExchange: post.isExchange,
    isDonation: post.isDonate,
    isInternship: post.isInternship,
    isPartnership: post.isPartnership,
    isMoney: post.isMoney,
    commissionFrom: post.commissionFrom,
    commissionTo: post.commissionTo,
    fixedRateFrom: post.fixedRateFrom,
    fixedRateTo: post.fixedRateTo,
    hourlyRateFrom: post.hourlyRateFrom,
    hourlyRateTo: post.hourlyRateTo,
    latitude: 24,
    longitude: 23,
    city: post.city,
    province: post.province,
    country: post.country,
    keywords:  post.keywords?post.keywords.split(','):null,
    attachments: attachments
    // keywords:  post.keywords?post.keywords:null,
    // pictures: [],
    // videos:[],
    // documents: [''],

    // ownerid: post.ownerId,
    // is_available: post.isAvailable,
// isAllianceOpen: ;
// isAllianceBlackBox: ;
// isAllianceMemberTotalVisible: ;
// allianceMembers:	;
    // portafolio: 'some portfolio',
    // alliance: post.alliance
  }
}

export function mapPostSend_UpdateOffer(post: VOPost): Offer_UpdateOffer {

  let attachments = mapAttachments_req(post.attachments);

  return {
    id: post.id,
    title: post.title,
    summary: post.description,
    // description: post.description,
    categoryid: post.categoryid,
    isExchange: post.isExchange,
    isDonation: post.isDonate,
    isInternship: post.isInternship,
    isPartnership: post.isPartnership,
    isMoney: post.isMoney,
    commissionFrom: post.commissionFrom,
    commissionTo: post.commissionTo,
    fixedRateFrom: post.fixedRateFrom,
    fixedRateTo: post.fixedRateTo,
    hourlyRateFrom: post.hourlyRateFrom,
    hourlyRateTo: post.hourlyRateTo,
    latitude: 24,
    longitude: 23,
    city: post.city,
    province: post.province,
    country: post.country,
    keywords:  post.keywords?post.keywords.split(','):null,
    attachments: attachments,
    // keywords:  post.keywords?post.keywords:null,
    // pictures: [],
    // videos:[],
    // documents: [''],

    ownerid: post.ownerId,
    isAvailable: post.isAvailable,
    // portafolio: 'some portfolio',
    // alliance: post.alliance
  }
}

export function mapAllianceMember(alliance_members: SOalliance_member[]): VOAllianceMember[]{
  // console.log('mapAllianceMember');

  return  alliance_members.map(function (alliance_member) {
    return {
      allianceid: alliance_member.allianceid,
      membershipStatus: alliance_member.membership_status,
      hasTasks: alliance_member.has_tasks,

      id: alliance_member.id,
      role: alliance_member.type,
      userName: alliance_member.user_name,
      primaryEmail: alliance_member.primary_email,
      displayName: alliance_member.display_name,
      phoneNumber: alliance_member.phone_number,
      profile_pic: alliance_member.profile_pic,
      jobtitle: alliance_member.jobtitle,
      company: alliance_member.company,
      firstName: alliance_member.first_name,
      lastName: alliance_member.last_name,
      occupation: alliance_member.occupation,
      url: alliance_member.url,
      description: alliance_member.description,
      offers: alliance_member.offers,
      needs: alliance_member.needs,
      numberOfOpps: alliance_member.number_of_opps,
      distance: alliance_member.distance
    };
  });
}

export function mapAlliance(alliance: SOalliance): VOAlliance{
  // console.log('mapAlliance');

  return {
    id: alliance.id,
    isBlackBox: alliance.is_black_box,
    isOpen: alliance.is_open,
    isMemberTotalVisible: alliance.is_member_total_visible,
    isActive: alliance.is_active,
    createdDate: alliance.created_date,
    offerid: alliance.offerid,
    // members: alliance.members,
    // members: VOAllianceMember[];
    alliance_members_count: alliance.alliance_members_count
  }
}

export function mapGetPost(res): any {

  let service: SOservice_expanded = res.json();
  console.log('mapGetMyPost res.json', res.json());

  let alliance: VOAlliance;
  let allianceMember: VOAllianceMember[];

  if(service.alliance){
    alliance = mapAlliance(service.alliance);
    if(service.alliance.members) allianceMember = mapAllianceMember(service.alliance.members);
    // if(service.alliance.members.length) allianceMember = mapAllianceMember(service.alliance.members);
  }

  return {
    id: service.id,
    title: service.title,
    type: service.type, // 'need'
    // summary: service.summary,
    description: service.summary,
    createdDate: service.created_date,
    categoryid: service.category_id,
    isExchange: service.is_exchange,
    isDonate: service.is_donation,
    isInternship: service.is_internship,
    isPartnership: service.is_partnership,
    isMoney: true,
    commissionFrom: service.commission_from,
    commissionTo: service.commission_to,
    fixedRateFrom: service.fixed_rate_from,
    fixedRateTo: service.fixed_rate_to,
    hourlyRateFrom: service.hourly_rate_from,
    hourlyRateTo: service.hourly_rate_to,
    latitude: service.latitude,
    longitude: service.longitude,
    city: service.city,
    province: service.province,
    country: service.country,
    isAvailable: service.is_available,
    isPublic: service.ispublic,
    keywords:  service.keywords?service.keywords.join(', '):null,
    // keywords:  service.keywords?service.keywords.split(','):null,
    // keywords:  service.keywords?service.keywords:null,
    // pictures: [],
    // videos:[],
    // documents: [''],
    ownerId: service.owner_id,
    portfolio: service.portafolio,
    status: service.status,
    // alliance: service.alliance,  // ??????
    alliance: alliance,
    allianceMembers: allianceMember?allianceMember:[],
    // alliance: mapAlliance(service.alliance),
    // allianceMembers: mapAllianceMember(service.alliance.members),
    attachments: service.attachments?service.attachments:[],
    isOpenToAllianace: true,
    isVisibleToPublic: true,
    visitCount: service.visit_count
  }
}

export function mapGetMyPosts(res): any[] {

  let services: SOservice_expanded[] = res.json();
  // let posts: any = res.json();
  console.log('mapGetMyPosts res.json', res.json());
  return  services.map(function (service) {
      // console.log('remap posts 2', service);
    let alliance: VOAlliance;
    let allianceMember: VOAllianceMember[];

    if(service.alliance){
      alliance = mapAlliance(service.alliance);
      if(service.alliance.members) allianceMember = mapAllianceMember(service.alliance.members);
      // if(service.alliance.members.length) allianceMember = mapAllianceMember(service.alliance.members);
    }

    return {
      id: service.id,
      title: service.title,
      type: service.type, // 'need'
      // summary: service.summary,
      description: service.summary,
      createdDate: service.created_date,
      categoryid: service.category_id,
      isExchange: service.is_exchange,
      isDonate: service.is_donation,
      isInternship: service.is_internship,
      isPartnership: service.is_partnership,
      isMoney: true,
      commissionFrom: service.commission_from,
      commissionTo: service.commission_to,
      fixedRateFrom: service.fixed_rate_from,
      fixedRateTo: service.fixed_rate_to,
      hourlyRateFrom: service.hourly_rate_from,
      hourlyRateTo: service.hourly_rate_to,
      latitude: service.latitude,
      longitude: service.longitude,
      city: service.city,
      province: service.province,
      country: service.country,
      isAvailable: service.is_available,
      isPublic: service.ispublic,
      keywords:  service.keywords?service.keywords.join(', '):null,
      // keywords:  service.keywords?service.keywords.split(','):null,
      // keywords:  service.keywords?service.keywords:null,
      // pictures: [],
      // videos:[],
      // documents: [''],
      ownerId: service.owner_id,
      portfolio: service.portafolio,
      status: service.status,
      // alliance: service.alliance,  // ??????
      alliance: alliance,
      // allianceMembers: allianceMember,
      allianceMembers: allianceMember?allianceMember:[],
      // alliance: mapAlliance(service.alliance),
      // allianceMembers: mapAllianceMember(service.alliance.members),
      attachments: service.attachments?service.attachments:[],
      isOpenToAllianace: true,
      isVisibleToPublic: true,
      visitCount: service.visit_count
    };
  });
}

// export function mapGetMyUser(res): VOUser {
//
//   let account: SOv_account = res.json();
//   console.log('mapGetMyUser res.json', res.json());
//   return {
//     id: account.id,
//     // type: account.type,
//     // sessionId: account,
//     // userId:account,
//     // role: account.type,
//     username: account.user_name,
//     // password:account,
//     primaryEmail: account.primary_email,
//     // emailVisible: account,
//     displayName: account.display_name,
//     // token: account,
//     // isLogin: account,
//     firstName: account.first_name,
//     lastName: account.last_name,
//
//     background_pic: account.background_pic,
//     video: account.bideo, // ????? bideo
//     resume: account.resume,
//     province: account.province,
//     city: account.city,
//     country: account.country,
//     latitude: account.latitude,
//     longitude: account.longitude,
//     skillset: account.skillset,
//     interests: account.interests,
//     profile_pic: account.profile_pic,
//     jobtitle: account.jobtitle,
//     company: account.company,
//     occupation: account.occupation,
//     url: account.url,
//     description: account.description,
//     phoneNumber: account.phone_number,
//     // phoneVisible: account,
//     distance: account.distance,
//     offers: account.offers,
//     needs: account.needs,
//     numberOfOpps: account.number_of_opps
//   }
// }

export function mapGetPerson(res): VOUserExt {

  let account: SOaccount_expanded = res.json();
  console.log('mapGetPerson res.json', res.json());
  return {
      id: account.id.toString(),
      // sessionId: account,
      // userId:account,
      // role: account.type,
      username: account.user_name,
      // password:account,
      primaryEmail: account.primary_email,
      // emailVisible: account,
      displayName: account.display_name,
      // token: account,
      // isLogin: account,
      firstName: account.first_name,
      lastName: account.last_name,

      background_pic: account.background_pic,
      video: account.bideo, // ????? bideo
      resume: account.resume,
      province: account.province,
      city: account.city,
      country: account.country,
      latitude: account.latitude,
      longitude: account.longitude,
      skillset: account.skillset,
      interests: account.interests,
      profile_pic: account.profile_pic,
      jobtitle: account.jobtitle,
      company: account.company,
      occupation: account.occupation,
      url: account.url,
      description: account.description,
      phoneNumber: account.phone_number,
      // phoneVisible: account,
      distance: account.distance,
      offers: account.offers,
      needs: account.needs,
      numberOfOpps: account.number_of_opps
    }
}

export function mapUpdateProfile(user: VOUserExt): SOupdate_profile_req{
  return {
    email:	user.primaryEmail,
    post:	'',
    phone:	user.phoneNumber,
    city:	user.city,
    province:	user.province,
    country:	user.country,
    latitude: 24,
    longitude: 23,
    // latitude:	user.latitude,
    // longitude:	user.longitude,
    // profile_pic:	user.profile_pic,
    profile_pic:	'some profile_pic',
    background_pic:	'some background_pic',
    // background_pic:	user.background_pic,
    video:	user.video,
    resume:	user.resume,
    skillset:	user.skillset,
    interests:	user.interests,
    type:	user.role,
    firstname:	user.firstName,
    lastname:	user.lastName,
    occupation:	1,
    // occupation:	user.occupation,
    jobtitle:	user.jobtitle,
    company:	user.company,
    name:	user.displayName,
    url:	user.url,
    description:	user.description
  }
}

// export function mapUploadRes(res: any): VOpost_attachment_ext{
export function mapUploadRes(res: any): VOpost_attachment{
  let result = res.json();
  return {
    name: result.public_id + '.' + result.format,
    type: 'image',
    // prefix: result.url.slice(result.url.indexOf("/upload/")+8, result.url.indexOf("/publicimages/")),
    prefix: 'v' + result.version,

    // url: result.url,
    // url_prefix: result.url.slice(0, result.url.indexOf("v" + result.version + "/")),
    // thumbnail: result.eager[0].url
  }
}