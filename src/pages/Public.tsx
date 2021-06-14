import Jabber from 'jabber'
import React from 'react'

import PageLayout from '@/components/PageLayout'

const jabber = new Jabber()
const text = jabber.createParagraph(10000)

export default Public

function Public() {
  return <PageLayout>{text}</PageLayout>
}
