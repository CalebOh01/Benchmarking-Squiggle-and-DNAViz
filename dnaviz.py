from squiggle import transform
from common import E_4, E_5, E_6
import time
import statistics

methods = ['squiggle', 'yau', 'yau-bp', 'gates', 'randic', 'qi']

for method in methods:
    i = 0
    times_squ_4 = []
    while i < 1000:
        t0 = time.time()
        transform(E_4, method = method)
        t1 = time.time()
        times_squ_4.append(t1 - t0)
        i += 1

    # print(method + ' 10,000 median: ' + str(statistics.median(times_squ_4)) + 's')
    # print(method + ' 10,000 mean: ' + str(statistics.mean(times_squ_4)) + 's')
    # print(method + ' 10,000 standard deviation: ' + str(statistics.stdev(times_squ_4)) + 's')
    print('| ' + method + ' | ' + '10,000 | ' +  str(statistics.median(times_squ_4)) + ' | ' + str(statistics.mean(times_squ_4)) + ' | ' + str(statistics.stdev(times_squ_4)) + ' |')

for method in methods:
    i = 0
    times_squ_5 = []
    while i < 1000:
        t0 = time.time()
        transform(E_5, method = method)
        t1 = time.time()
        times_squ_5.append(t1 - t0)
        i += 1

    # print(method + ' 100,000 median: ' + str(statistics.median(times_squ_5)) + 's')
    # print(method + ' 100,000 mean: ' + str(statistics.mean(times_squ_5)) + 's')
    # print(method + ' 100,000 standard deviation: ' + str(statistics.stdev(times_squ_5)) + 's')
    print('| ' + method + ' | ' + '100,000 | ' +  str(statistics.median(times_squ_5)) + ' | ' + str(statistics.mean(times_squ_5)) + ' | ' + str(statistics.stdev(times_squ_5)) + ' |')

for method in methods:
    i = 0
    times_squ_6 = []
    while i < 1000:
        t0 = time.time()
        transform(E_6, method = method)
        t1 = time.time()
        times_squ_6.append(t1 - t0)
        i += 1

    # print(method + ' 1,000,000 median: ' + str(statistics.median(times_squ_6)) + 's')
    # print(method + ' 1,000,000 mean: ' + str(statistics.mean(times_squ_6)) + 's')
    # print(method + ' 1,000,000 standard deviation: ' + str(statistics.stdev(times_squ_6)) + 's')
    print('| ' + method + ' | ' + '1,000,000 | ' +  str(statistics.median(times_squ_6)) + ' | ' + str(statistics.mean(times_squ_6)) + ' | ' + str(statistics.stdev(times_squ_6)) + ' |')