declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement }
    constructor(options?: { dpr?: number; alpha?: boolean })
    setSize(width: number, height: number): void
    render(options: { scene: Transform }): void
  }

  export class Transform {
    setParent(parent: Transform): void
  }

  export class Vec3 {
    constructor(x?: number, y?: number, z?: number)
    set(x: number, y: number, z: number): this
    copy(vector: Vec3): this
    add(value: Vec3): this
    sub(value: Vec3): this
    multiply(value: number | Vec3): this
    lerp(target: Vec3, alpha: number): this
  }

  export class Color {
    constructor(color?: string | number)
  }

  export interface PolylineUniforms {
    uColor?: { value: Color }
    uThickness?: { value: number }
    uOpacity?: { value: number }
    uTime?: { value: number }
    uEnableShaderEffect?: { value: number }
    uEffectAmplitude?: { value: number }
    uEnableFade?: { value: number }
  }

  export interface PolylineOptions {
    points: Vec3[]
    vertex?: string
    fragment?: string
    uniforms?: PolylineUniforms
  }

  export class MeshProgram {
    uniforms: Record<string, { value: number }>
  }

  export class Mesh {
    program: MeshProgram
    setParent(parent: Transform): void
  }

  export class Polyline {
    mesh: Mesh
    constructor(gl: WebGLRenderingContext, options: PolylineOptions)
    resize(): void
    updateGeometry(): void
  }
}
