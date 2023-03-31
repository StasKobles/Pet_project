import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoaders';
import { buildCssLoader } from './loaders/buildCssLoaders';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const { isDev } = options;
    const cssLoader = buildCssLoader(isDev);
    const babelLoader = buildBabelLoader(options);
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
