import React from 'react';
import Layout from '../components/layout.js';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
        <Layout>
        <h1>Attribute Component Capability Matrix</h1>
        <p>No one reads test plans. As soon as one is created, its usually out of date. So what's the solution?</p>
        <p>James Whittaker (when he was at Google) created the ACC Matrix.</p>
        <Link href="https://testing.googleblog.com/2011/10/google-test-analytics-now-in-open.html">
            <a>Check it out here:</a>
        </Link>
        <p>
            However, once James left Google - the project died. So this is a first attempt at a resurection. 
            This time using a Graph Database to store the relationships between the Attributes and Components and have the
            Capabilities as links between them.
        </p>
      </Layout>
    </div>
  );
}