
import React from 'react';

const SecurityTxt = () => {
  return (
    <pre className="font-mono text-sm p-4 bg-gray-100 rounded">
{`Contact: mailto:security@oshaquick.com
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://oshaquick.com/.well-known/security.txt
Policy: https://oshaquick.com/security-policy
Hiring: https://oshaquick.com/careers`}
    </pre>
  );
};

export default SecurityTxt;
