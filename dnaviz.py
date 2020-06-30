from squiggle import transform
from common import E_4, E_5, E_6
import time
import statistics

i = 0
times_squ_4 = []
while i < 1000:
    t0 = time.time()
    transform(E_4)
    t1 = time.time()
    times_squ_4.append(t1 - t0)
    i += 1

print('squiggle 10,000 median: ' + str(statistics.median(times_squ_4)) + 's')
print('squiggle 10,000 mean: ' + str(statistics.mean(times_squ_4)) + 's')
print('squiggle 10,000 standard deviation: ' + str(statistics.stdev(times_squ_4)) + 's')

j = 0
times_squ_5 = []
while j < 1000:
    t0 = time.time()
    transform(E_5)
    t1 = time.time()
    times_squ_5.append(t1 - t0)
    j += 1

print('squiggle 100,000 median: ' + str(statistics.median(times_squ_5)) + 's')
print('squiggle 100,000 mean: ' + str(statistics.mean(times_squ_5)) + 's')
print('squiggle 100,000 standard deviation: ' + str(statistics.stdev(times_squ_5)) + 's')

k = 0
times_squ_6 = []
while k < 1000:
    t0 = time.time()
    transform(E_6)
    t1 = time.time()
    times_squ_6.append(t1 - t0)
    k += 1

print('squiggle 1,000,000 median: ' + str(statistics.median(times_squ_6)) + 's')
print('squiggle 1,000,000 mean: ' + str(statistics.mean(times_squ_6)) + 's')
print('squiggle 1,000,000 standard deviation: ' + str(statistics.stdev(times_squ_6)) + 's')