export interface Route {
    path: string
    render: React.FC<{ match: unknown }>
}
