using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pizza.Models;

namespace Pizza.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly PizzaContext _context;

        public OrdersController(PizzaContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderInfo>>> GetOrderInfos()
        {
            return await _context.OrderInfos.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderInfo>> GetOrderInfo(int id)
        {
            var orderInfo = await _context.OrderInfos.FindAsync(id);

            if (orderInfo == null)
            {
                return NotFound();
            }

            return orderInfo;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderInfo(int id, OrderInfo orderInfo)
        {
            if (id != orderInfo.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(orderInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Orders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<OrderInfo>> PostOrderInfo(OrderInfo orderInfo)
        {
            _context.OrderInfos.Add(orderInfo);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (OrderInfoExists(orderInfo.OrderId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetOrderInfo", new { id = orderInfo.OrderId }, orderInfo);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<OrderInfo>> DeleteOrderInfo(int id)
        {
            var orderInfo = await _context.OrderInfos.FindAsync(id);
            if (orderInfo == null)
            {
                return NotFound();
            }

            _context.OrderInfos.Remove(orderInfo);
            await _context.SaveChangesAsync();

            return orderInfo;
        }

        private bool OrderInfoExists(int id)
        {
            return _context.OrderInfos.Any(e => e.OrderId == id);
        }
    }
}
