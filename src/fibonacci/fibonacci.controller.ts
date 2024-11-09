import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get('fibonacci/:n')
    fibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);

    if (isNaN(num) || num <= 0) {
        throw new Error('Number must grater than zero.');
    }

    return { sequence: this.calculateFibonacci(num) };
}

private calculateFibonacci(n: number): number[] {
    const fibonaccisequence = [];
    let a = 0, b = 1, temp;

    for (let i = 0; i < n; i++) {
        fibonaccisequence.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }

    return fibonaccisequence;
}

}