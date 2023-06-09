const API_URL = process.env.GQL_API_PATH
async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.GQL_JWT_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.GQL_JWT_TOKEN}`
    }
  
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
  export async function getMenuItems() {
    const data = await fetchAPI(`
    query getMenuItems{
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
            edges {
              node {
                label
                path
                uri
                route {
                  code
                  link
                  name
                  iscomplete
                }
                childItems {
                  edges {
                    node {
                      label
                      uri
                      route {
                        code
                        link
                        name
                        iscomplete
                        
                      }
                    }
                  }
                }
                
              }
            }
          }
      }
    `)
    return data?.menuItems?.edges
  }
export async function getFootMenuItems() {
  const data = await fetchAPI(`
    query getFootMenuItems{
      menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            url
            childItems {
              edges {
                node {
                  label
                  url
                  
                }
              }
            }
          }
        }
      }
      }
    `)
  return data?.menuItems?.edges
}
export async function getCertificateData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getCertificateData{
      pageBy(uri: "${tabKey}") {
        certificates {
          applicationTab {
            desc
            fieldGroupName
            cardMenuBox {
              fieldGroupName
              manuName
              menuDesc
              menuButton {
                btnLink
                btnName
                fieldGroupName
              }
            }
          }
          faqTab {
            desc
            fieldGroupName
            ttitle
          }
          otherTabs {
            desc
            fieldGroupName
            tabName
          }
        }
        slug
        title
      }
      }
    `)
  return data?.pageBy?.certificates
}
export async function getRtiPageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getRtiPageData{
      pageBy(uri: "${tabKey}") {
        
    slug
    title
    rti {
      description
      button {
        link
        name
      }
      imageBlock {
        desc
        images {
          link
          sizes
          title
          uri
        }
      }
    }
      }
      }
    `)
  return data?.pageBy?.rti
}
export async function getAllSchemeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeData{
      allSchemes {
        nodes {
          title
          slug
          uri
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}


export async function gettaxes(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query taxes {
    pageBy(uri: "/taxes-fees/") {
      slug
      title
      taxes_fees {
        fees {
          fieldGroupName
          feesInformation {
            entry
            for
            rate
          }
        }
        taxes {
          fieldGroupName
          taxInformation {
            entry
            taxes
            for
            rate
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.taxes_fees
}

export async function getpower(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query power {
    pageBy(uri: "/powers-duties-of-officers/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}

export async function getobligations(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query poweroblig {
    pageBy(uri: "/v-p-obligations/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}


export async function getNewsLetterData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterData{
      newsLetters {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
          }
          
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}

export async function getPublicNoticeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getPublicNoticeData{
      allNotices {
        nodes {
          uri
          title
          slug
          notices {
            date
            desc
            title
            downloadUrl
          }
        }
      }
    }
  `)
  return data?.allNotices?.nodes
}
export async function getNoticeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query NoticeData{
      allNotices(first: 5) {
        nodes {
          notices {
            action
            title
            date
            downloadUrl
          }
        }
      }
    }
  `)
  return data?.allNotices?.nodes
}
export async function getVillageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getVillageData {
    pageBy(uri: "/village/") {
      slug
      title
      village {
        desc
        otherDesc
        imageUrl
        title
        image {
          uri
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getVillageDataShort(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getVillageDataShort {
    pageBy(pageId: 1070) {
      slug
      village {
        desc
        image {
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getSarpanchMsg(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSarpanchMsg {
    pageBy(uri: "/message-from-the-sarpanch/") {
      slug
      title
      sarpanchMsg {
        desc
        imageUrl
        image {
          sourceUrl
          uri
        }
      }
    }
  }
  `)
  return data?.pageBy?.sarpanchMsg
}
export async function getMediaGalleryData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getMediaGalleryData {
    mediaGalleries {
      edges {
        node {
          title
          slug
          gallery {
            content {
              categoryName {
                name
                slug
                taxonomyName
                termTaxonomyId
                uri
              }
              image {
                slug
                sourceUrl
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
  `)
  return data?.mediaGalleries?.edges
}
export async function getSliderData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSliderData {
    pageBy(pageId: 578) {
      slug
      homePage {
          slider {
            captionBig
            captionSmall
            image {
              sourceUrl
            }
          }
      }
    }
  }
  `)
  return data?.pageBy?.homePage?.slider
}
export async function getNewsLetterDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterDataHome{
      newsLetters(first: 5) {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
            desc
          }
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}

export async function getDevHomeData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getDevelopmentHome {
    developments(first: 10) {
      nodes {
        title
        developments {
          title
          image {
            sourceUrl
          }
        }
      }
    }
  }
  `)
  return data?.developments?.nodes
}
export async function getAllSchemeDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeDataHome{
      allSchemes {
        nodes {
          title
          slug
          uri
          schemes {
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}

export async function getProccedingData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getProccedings {
    proceedings {
      nodes {
        title
        uri
        proceedings {
          title
          description
          dateAndTime
          duration
          startTime
          venue
          proceedingsPeriods {
            termTaxonomyId
            name
          }
          attachments {
            sourceUrl
            mediaItemUrl
          }
          attendanceDetails {
            noOfAttendees
            uploadAttendanceSheets {
              sourceUrl
              mediaItemUrl
            }
          }
          chair {
            termTaxonomyId
            name
            description
          }
          individualProceedings {
            title
            seconder
            proposer
            description
          }
          recorder {
            designation {
              description
              name
              termTaxonomyId
            }
          }
        }
      }
    }
  }
  `)
  return data?.proceedings?.nodes
}

export async function getComplainCategoryData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getComplainCategoryData {
    complainCategories {
      nodes {
        name
        termTaxonomyId
      }
    }
  }
  `)
  return data?.complainCategories?.nodes
}

export async function getPanchMemData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getPanchMemData {
    pageBy(uri: "panchayat-members") {
      slug
      title
      members {
        directorateOfPanchayats {
          blockDevelopmentOfficer {
            designation
            name
            image {
              sourceUrl
            }
            members {
              designation
              image {
                sourceUrl
                title
              }
              member {
                designation
                name
                image {
                  sourceUrl
                  title
                }
                fieldGroupName
                wardNo
              }
              name
              fieldGroupName
            }
            fieldGroupName
          }
          designation
          name
          fieldGroupName
          image {
            sourceUrl
          }
        }
        fieldGroupName
      }
    }
  }
  `)
  return data?.pageBy?.members
}

export async function getInfraData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getInfraData {
    infrastructures(first: 10) {
      nodes {
        slug
        uri
        title
        infrastructure {
          infraTitle
          infraDetails {
            desc
            image {
              sourceUrl
            }
            name
          }
        }
      }
    }
  }
  `)
  return data?.infrastructures?.nodes
}

export async function getNewsCardData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsCardData{
      newsLetters(first: 5) {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
            desc
            images {
              sourceUrl
            }
            mainDesc
          }
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}

export async function getCommitteeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getCommitteeData {
    committeeBy(uri: "${tabKey}") {
      committee {
        fieldGroupName
        title
        desc
        members {
          name
          designation
          contactNo
          emailId
          address
          fieldGroupName
        }
        
      }
      slug
      uri
    }
  }
    `)
  return data?.committeeBy?.committee
}