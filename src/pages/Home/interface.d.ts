declare namespace home {
  interface album {
    name: string,
    alg: string,
    canDislike: boolean,
    copywriter: string,
    highQuality: boolean,
    id: number,
    name: string,
    picUrl: string,
    playCount: number,
    trackCount: number,
    type: number,
    [key: string]: any
  }

  interface Recommended {
    category: number,
    code: number,
    hasTaste: number,
    result: Array<album>
  }
}