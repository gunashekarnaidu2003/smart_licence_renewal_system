export const clients = [
    {
        id: 1,
        name: 'Sainsburry',
        type: 'Parent',
        sector: 'Retail',
        status: 'Paid',
        subscription: 'Diamond (10 years)',
        loyaltyTier: 'Diamond',
        expiryDate: 'Jan 15, 2036',
        licence: 'AL-7829-XQ',
        primaryAdmin: { name: 'Robert Johnson', email: 'robert.j@sainsburry.co.uk' },
        secondaryAdmin: { name: 'John Doe', email: 'john.d@sainsburry.co.uk' },
        location: 'London, UK',
        lastPaymentDate: 'Jan 15, 2026',
        paymentStatus: 'Paid',
        branches: [
            {
                id: 101,
                name: 'Sainsburry - London Central',
                status: 'Paid',
                location: 'London',
                licence: 'AL-LC-8821',
                expiryDate: 'Jan 15, 2036',
                monitorsCount: 65,
                lastPaymentDate: 'Jan 15, 2026',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Sarah Connor', email: 's.connor@sainsburry.co.uk' }
            },
            {
                id: 102,
                name: 'Sainsburry - Manchester North',
                status: 'Renewal Pending',
                location: 'Manchester',
                licence: 'AL-MN-3342',
                expiryDate: 'Feb 15, 2026',
                monitorsCount: 42,
                lastPaymentDate: 'Feb 20, 2025',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Mike Ross', email: 'm.ross@sainsburry.co.uk' },
                requestStatus: 'Requested'
            },
            {
                id: 103,
                name: 'Sainsburry - Bristol East',
                status: 'Paid',
                location: 'Bristol',
                licence: 'AL-BE-4451',
                expiryDate: 'Mar 10, 2026',
                monitorsCount: 38,
                lastPaymentDate: 'Mar 10, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Rachel Zane', email: 'r.zane@sainsburry.co.uk' }
            },
            {
                id: 104,
                name: 'Sainsburry - Leeds Central',
                status: 'Paid',
                location: 'Leeds',
                licence: 'AL-LC-5562',
                expiryDate: 'May 12, 2026',
                monitorsCount: 54,
                lastPaymentDate: 'May 12, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Jessica Pearson', email: 'j.pearson@sainsburry.co.uk' }
            },
            {
                id: 105,
                name: 'Sainsburry - Birmingham City',
                status: 'Renewal Pending',
                location: 'Birmingham',
                licence: 'AL-BC-9921',
                expiryDate: 'Mar 25, 2026',
                monitorsCount: 22,
                lastPaymentDate: 'Feb 05, 2025',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Harvey Specter', email: 'h.specter@sainsburry.co.uk' },
                requestStatus: 'None'
            }
        ]
    },
    {
        id: 3,
        name: 'Mercedez-Benz UK',
        type: 'Parent',
        sector: 'Automobile',
        status: 'Paid',
        subscription: 'Platinum (5 years)',
        loyaltyTier: 'Platinum',
        expiryDate: 'Mar 20, 2031',
        licence: 'MB-UK-9921',
        primaryAdmin: { name: 'Lewis Hamilton', email: 'l.hamilton@mercedez.com' },
        secondaryAdmin: { name: 'Toto Wolff', email: 't.wolff@mercedez.com' },
        location: 'Milton Keynes, UK',
        lastPaymentDate: 'Mar 20, 2025',
        paymentStatus: 'Paid',
        branches: [
            {
                id: 301,
                name: 'Mercedez London South',
                status: 'Paid',
                location: 'London',
                licence: 'MB-LS-0012',
                expiryDate: 'Mar 20, 2031',
                monitorsCount: 15,
                lastPaymentDate: 'Mar 20, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'George Russell', email: 'g.russell@mercedez.com' }
            },
            {
                id: 302,
                name: 'Mercedez Manchester Retail',
                status: 'Paid',
                location: 'Manchester',
                licence: 'MB-MR-0054',
                expiryDate: 'Apr 15, 2030',
                monitorsCount: 20,
                lastPaymentDate: 'Apr 15, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Mick Schumacher', email: 'm.schumacher@mercedez.com' }
            },
            {
                id: 303,
                name: 'Mercedez Birmingham Workshop',
                status: 'Renewal Pending',
                location: 'Birmingham',
                licence: 'MB-BW-0099',
                expiryDate: 'Sep 30, 2026',
                monitorsCount: 8,
                lastPaymentDate: 'Sep 30, 2024',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Bono My-Tires', email: 'bono@mercedez.com' }
            }
        ]
    },
    {
        id: 4,
        name: 'Manchesterr United FC',
        type: 'Parent',
        sector: 'Sports',
        status: 'Renewal Pending',
        subscription: 'Gold (2 years)',
        loyaltyTier: 'Gold',
        expiryDate: 'Jun 10, 2028',
        licence: 'MU-FC-1878',
        primaryAdmin: { name: 'Marcus Rashford', email: 'm.rashford@manutd.com' },
        secondaryAdmin: { name: 'Erik Ten Hag', email: 'e.tenhag@manutd.com' },
        location: 'Manchester, UK',
        lastPaymentDate: 'Jun 10, 2025',
        paymentStatus: 'Renewal Pending',
        branches: [
            {
                id: 401,
                name: 'Old Trafford Stadium Display',
                status: 'Renewal Pending',
                location: 'Manchester',
                licence: 'MU-OT-0001',
                expiryDate: 'Jun 10, 2028',
                monitorsCount: 150,
                lastPaymentDate: 'Jun 10, 2025',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Bruno Fernandes', email: 'b.fernandes@manutd.com' }
            },
            {
                id: 402,
                name: 'Carrington Training Complex',
                status: 'Paid',
                location: 'Carrington',
                licence: 'MU-TC-0042',
                expiryDate: 'Aug 15, 2029',
                monitorsCount: 30,
                lastPaymentDate: 'Aug 15, 2024',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Casemiro Santos', email: 'casemiro@manutd.com' }
            },
            {
                id: 403,
                name: 'MUFC Megastore Terminal',
                status: 'Paid',
                location: 'Old Trafford',
                licence: 'MU-MS-1120',
                expiryDate: 'Dec 01, 2030',
                monitorsCount: 12,
                lastPaymentDate: 'Dec 01, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Lisandro Martinez', email: 'l.martinez@manutd.com' }
            }
        ]
    },
    {
        id: 5,
        name: 'Ferrarii SpA',
        type: 'Parent',
        sector: 'Automobile',
        status: 'Paid',
        subscription: 'Diamond (10 years)',
        loyaltyTier: 'Diamond',
        expiryDate: 'May 05, 2035',
        licence: 'FE-IT-1947',
        primaryAdmin: { name: 'Charles Leclerc', email: 'c.leclerc@ferrarii.it' },
        secondaryAdmin: { name: 'Carlos Sainz', email: 'c.sainz@ferrarii.it' },
        location: 'Maranello, IT',
        lastPaymentDate: 'May 05, 2025',
        paymentStatus: 'Paid',
        branches: [
            {
                id: 501,
                name: 'Ferrarii Maranello Factory',
                status: 'Paid',
                location: 'Maranello',
                licence: 'FE-MF-001',
                expiryDate: 'May 05, 2035',
                monitorsCount: 88,
                lastPaymentDate: 'May 05, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Fred Vasseur', email: 'f.vasseur@ferrarii.it' }
            },
            {
                id: 502,
                name: 'Ferrarii Retail - Milan Duomo',
                status: 'Paid',
                location: 'Milan',
                licence: 'FE-RM-055',
                expiryDate: 'Jun 12, 2034',
                monitorsCount: 5,
                lastPaymentDate: 'Jun 12, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Antonio Fuoco', email: 'a.fuoco@ferrarii.it' }
            }
        ]
    },
    {
        id: 6,
        name: 'Tessla Inc.',
        type: 'Parent',
        sector: 'Tech / Auto',
        status: 'Paid',
        subscription: 'Platinum (5 years)',
        loyaltyTier: 'Platinum',
        expiryDate: 'Nov 12, 2030',
        licence: 'TSLA-US-X12',
        primaryAdmin: { name: 'Elon Musk', email: 'elon@tessla.com' },
        secondaryAdmin: { name: 'Franz von Holzhausen', email: 'franz@tessla.com' },
        location: 'Austin, TX',
        lastPaymentDate: 'Nov 12, 2025',
        paymentStatus: 'Paid',
        branches: [
            {
                id: 601,
                name: 'Gigafactory Texas',
                status: 'Paid',
                location: 'Austin',
                licence: 'TSLA-GIGA-TX',
                expiryDate: 'Nov 12, 2030',
                monitorsCount: 500,
                lastPaymentDate: 'Nov 12, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Drew Baglino', email: 'drew@tessla.com' }
            },
            {
                id: 602,
                name: 'Tessla Berlin',
                status: 'Renewal Pending',
                location: 'Berlin',
                licence: 'TSLA-GIGA-DE',
                expiryDate: 'Dec 01, 2026',
                monitorsCount: 350,
                lastPaymentDate: 'Dec 01, 2024',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Rohan Patel', email: 'rohan@tessla.com' }
            },
            {
                id: 603,
                name: 'Tessla Shanghai',
                status: 'Paid',
                location: 'Shanghai',
                licence: 'TSLA-GIGA-CN',
                expiryDate: 'Oct 05, 2031',
                monitorsCount: 420,
                lastPaymentDate: 'Oct 05, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Tom Zhu', email: 'tom.zhu@tessla.com' }
            }
        ]
    },
    {
        id: 7,
        name: 'Zarra (Inditex)',
        type: 'Parent',
        sector: 'Fashion',
        status: 'Paid',
        subscription: 'Gold (3 years)',
        loyaltyTier: 'Gold',
        expiryDate: 'Aug 20, 2028',
        licence: 'ZARA-ES-99',
        primaryAdmin: { name: 'Marta Ortega', email: 'marta@inditex.com' },
        secondaryAdmin: { name: 'Oscar Garcia', email: 'oscar@inditex.com' },
        location: 'A Coruña, ES',
        lastPaymentDate: 'Aug 20, 2025',
        paymentStatus: 'Paid',
        branches: [
            {
                id: 701,
                name: 'Zarra Oxford Street',
                status: 'Paid',
                location: 'London',
                licence: 'ZARA-LDN-01',
                expiryDate: 'Aug 20, 2028',
                monitorsCount: 45,
                lastPaymentDate: 'Aug 20, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'James Smith', email: 'james.s@zarra.com' }
            },
            {
                id: 702,
                name: 'Zarra Paris Champs',
                status: 'Paid',
                location: 'Paris',
                licence: 'ZARA-PAR-02',
                expiryDate: 'Jul 15, 2029',
                monitorsCount: 38,
                lastPaymentDate: 'Jul 15, 2025',
                paymentStatus: 'Paid',
                primaryAdmin: { name: 'Pierre Dubois', email: 'pierre.d@zarra.com' }
            },
            {
                id: 703,
                name: 'Zarra Tokyo Ginza',
                status: 'Renewal Pending',
                location: 'Tokyo',
                licence: 'ZARA-TOK-03',
                expiryDate: 'Sep 10, 2026',
                monitorsCount: 52,
                lastPaymentDate: 'Sep 10, 2024',
                paymentStatus: 'Renewal Pending',
                primaryAdmin: { name: 'Kenji Tanaka', email: 'kenji.t@zarra.com' }
            }
        ]
    }
];

export const resellers = [
    {
        id: 1,
        name: 'Global Connect Resellers',
        subscription: 'Gold (2 years)',
        loyaltyTier: 'Gold',
        offer: '15% Volume Discount',
        clientCount: 12,
        clientNames: ['SmallBiz Co', 'RetailHub', 'FastTrack Logistics'],
        contact: 'mike@globalconnect.com',
        margin: '£1,200',
        cost: '£8,500'
    }
];

export const renewalRequests = [
    {
        id: 1,
        branchId: 102,
        branchName: 'Sainsburry - Manchester North',
        expiryDate: 'Feb 15, 2026',
        requestedAt: 'Jan 31, 2026',
        status: 'Pending',
        reason: 'Budget allocation confirmed at regional level.'
    }
];

export const countryServiceData = [
    { country: 'United Kingdom', clientCount: 450, activeMonitors: 1200 },
    { country: 'Croatia', clientCount: 120, activeMonitors: 340 },
    { country: 'France', clientCount: 85, activeMonitors: 210 },
    { country: 'Germany', clientCount: 156, activeMonitors: 490 },
    { country: 'Spain', clientCount: 64, activeMonitors: 180 },
    { country: 'United States', clientCount: 210, activeMonitors: 1540 },
    { country: 'China', clientCount: 140, activeMonitors: 980 },
    { country: 'India', clientCount: 320, activeMonitors: 1100 }
];

export const paymentStats = {
    totalScreens: 221,
    amountPaid: '£58,200',
    balanceAmount: '£10,100',
    upcomingRenewal: '£14,500',
    pendingPayments: '£4,200',
    transactions: [
        { id: 1, branch: 'Sainsburry - London Central', amount: '£4,500', status: 'Paid', date: 'Jan 15, 2026' },
        { id: 2, branch: 'Sainsburry - Manchester North', amount: '£2,200', status: 'Pending', date: 'Feb 20, 2026' },
        { id: 3, branch: 'Sainsburry - Birmingham City', amount: '£1,800', status: 'Pending', date: 'Feb 28, 2026' },
        { id: 4, branch: 'Sainsburry - Leeds Central', amount: '£2,500', status: 'Upcoming', date: 'May 12, 2026' }
    ]
};

export const stats = {
    achievements: 124,
    targets: '95%',
    rating: 4.8,
    pendingPayments: '£14,500',
    monitorsActive: 221,
    monitorsTotal: 221,
    newCustomersPerc: 15,
    existingCustomersPerc: 85,
    reminders: [
        { id: 1, title: 'Check Renewal for Sainsburry Birmingham', time: '1 hour left', priority: 'High' },
        { id: 2, title: 'Check Renewal for Sainsburry Manchester', time: '14 days left', priority: 'Medium' },
        { id: 3, title: 'System Security Patch v2.4.1 Deployment', time: 'In 3 days', priority: 'Critical' },
        { id: 5, title: 'Outstanding Invoice Follow-up: Birmingham', time: 'Feb 14', priority: 'High' }
    ]
};

export const renewalRisks = {
    totalLicencesAtRisk: 2,
    estRevenueToSecure: '£600',
    manualInterventions: 1,
    priorityQueue: [
        { id: 1, title: 'Birmingham City Centre Screen 1', subtitle: 'ALLSEE Birmingham', status: 'WARNING', action: 'Open Support Ticket' },
        { id: 2, title: 'Birmingham City Centre Screen 2', subtitle: 'ALLSEE Birmingham', status: 'WARNING', action: 'Approve & Charge Card' }
    ]
};

export const issues = [
    { id: 1, title: 'Server Latency (Region: US-East)', status: 'Active', category: 'Server Issue', date: 'Jan 31, 2026' },
    { id: 2, title: 'Gateway Payment Timeout', status: 'Processing', category: 'Payment Issue', date: 'Jan 30, 2026' }
];
