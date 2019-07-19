export const data = {
    nodes: [
        { id: 'DATABASE', symbolType: "square", color: "red"  }, 
        { id: 'UI', symbolType: "square", color: "red"   }, 
        { id: 'API', symbolType: "square", color: "red"  },
        { id: 'GRIDS', symbolType: "square", color: "red"  }, 
        { id: 'MENU', symbolType: "square", color: "red"  },  
        { id: 'GRAPHS', symbolType: "square", color: "red"  },
        { id: 'accurate' }, 
        { id: 'stable' }, 
        { id: 'fast' }, 
        { id: 'intuitive' }, 
        { id: 'scalable' },  
        { id: 'portable' },
        { id: 'convenient' },  //crud
        { id: 'secure' }
    ],
    links: [
        { source: 'fast', target: 'GRIDS', color: "red"  },
        { source: 'fast', target: 'DATABASE' },
        { source: 'fast', target: 'API' }, 
        { source: 'fast', target: 'GRAPHS' }, 
        { source: 'accurate', target: 'API' }, 
        { source: 'accurate', target: 'GRIDS' }, 
        { source: 'intuitive', target: 'GRIDS' }, 
        { source: 'intuitive', target: 'API' },
        { source: 'intuitive', target: 'MENU' },
        { source: 'intuitive', target: 'UI' },
        { source: 'intuitive', target: 'GRAPHS' },
        { source: 'stable', target: 'DATABASE' }, 
        { source: 'scalable', target: 'DATABASE' }, 
        { source: 'scalable', target: 'API' }, 
        { source: 'portable', target: 'UI' }, 
        { source: 'portable', target: 'GRIDS' }, 
        { source: 'portable', target: 'API' }, 
        { source: 'secure', target: 'API' }, 
        { source: 'secure', target: 'DATABASE' }, 
        { source: 'convenient', target: 'API' }, 
        { source: 'convenient', target: 'DATABASE' }
    ]
};